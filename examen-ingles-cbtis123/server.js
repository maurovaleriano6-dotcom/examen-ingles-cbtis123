// ==========================================================
// Servidor del Examen de Inglés - CBTIS 123
// Guarda resultados y actividad sospechosa en una base de
// datos Turso (SQLite en la nube, gratis y persistente), y
// permite exportarlos a un archivo Excel.
// ==========================================================

const express = require('express');
const path = require('path');
const { createClient } = require('@libsql/client');
const ExcelJS = require('exceljs');

const app = express();
const PORT = process.env.PORT || 3000;

// Contraseña para entrar al panel del maestro y exportar datos.
// IMPORTANTE: cámbiala usando una variable de entorno TEACHER_PASSWORD.
const TEACHER_PASSWORD = process.env.TEACHER_PASSWORD || 'cbtis123-2026';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ---------------- BASE DE DATOS (Turso / libSQL) ----------------
// Si no configuras TURSO_DATABASE_URL, usa un archivo local
// (útil solo para pruebas en tu computadora, no persiste en Render).
const db = createClient({
  url: process.env.TURSO_DATABASE_URL || 'file:exam_results.db',
  authToken: process.env.TURSO_AUTH_TOKEN || undefined
});

async function initDb() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      student_group TEXT NOT NULL,
      score INTEGER NOT NULL,
      total_questions INTEGER NOT NULL,
      percentage INTEGER NOT NULL,
      exam_date TEXT,
      duration TEXT,
      tab_switch_count INTEGER DEFAULT 0,
      fullscreen_exit_count INTEGER DEFAULT 0,
      cheating_detected INTEGER DEFAULT 0,
      block_reason TEXT,
      cheat_log TEXT,
      status TEXT DEFAULT 'completado',
      created_at TEXT DEFAULT (datetime('now', 'localtime'))
    )
  `);
}

// ---------------- MIDDLEWARE DE AUTENTICACIÓN DEL MAESTRO ----------------
function checkTeacherPassword(req, res, next) {
  const password = req.query.password || req.headers['x-teacher-password'];
  if (password !== TEACHER_PASSWORD) {
    return res.status(401).json({ ok: false, error: 'Contraseña incorrecta' });
  }
  next();
}

// ---------------- RUTAS DE LA API ----------------

// Guardar el resultado de un examen (terminado normalmente o bloqueado por trampa)
app.post('/api/exam-result', async (req, res) => {
  try {
    const body = req.body || {};

    const row = {
      name: String(body.name || 'Desconocido').slice(0, 200),
      studentGroup: String(body.group || body.studentGroup || 'N/A').slice(0, 100),
      score: Number.isFinite(body.score) ? body.score : 0,
      totalQuestions: Number.isFinite(body.totalQuestions) ? body.totalQuestions : 0,
      percentage: Number.isFinite(body.percentage) ? body.percentage : 0,
      examDate: body.examDate || new Date().toLocaleDateString(),
      duration: body.duration || '',
      tabSwitchCount: Number.isFinite(body.tabSwitchCount) ? body.tabSwitchCount : 0,
      fullscreenExitCount: Number.isFinite(body.fullscreenExitCount) ? body.fullscreenExitCount : 0,
      cheatingDetected: body.cheatingDetected ? 1 : 0,
      blockReason: body.blockReason || null,
      cheatLog: JSON.stringify(body.cheatLog || []),
      status: body.status || (body.cheatingDetected ? 'bloqueado' : 'completado')
    };

    const result = await db.execute({
      sql: `INSERT INTO results
        (name, student_group, score, total_questions, percentage, exam_date, duration,
         tab_switch_count, fullscreen_exit_count, cheating_detected, block_reason, cheat_log, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        row.name, row.studentGroup, row.score, row.totalQuestions, row.percentage,
        row.examDate, row.duration, row.tabSwitchCount, row.fullscreenExitCount,
        row.cheatingDetected, row.blockReason, row.cheatLog, row.status
      ]
    });

    res.json({ ok: true, id: Number(result.lastInsertRowid) });
  } catch (err) {
    console.error('Error guardando resultado:', err);
    res.status(500).json({ ok: false, error: 'Error al guardar el resultado' });
  }
});

// Ver todos los resultados (protegido con contraseña) - usado por el panel del maestro
app.get('/api/results', checkTeacherPassword, async (req, res) => {
  try {
    const result = await db.execute('SELECT * FROM results ORDER BY id DESC');
    res.json({ ok: true, results: result.rows });
  } catch (err) {
    console.error('Error leyendo resultados:', err);
    res.status(500).json({ ok: false, error: 'Error al leer los resultados' });
  }
});

// Borrar un resultado individual (protegido)
app.delete('/api/results/:id', checkTeacherPassword, async (req, res) => {
  try {
    await db.execute({ sql: 'DELETE FROM results WHERE id = ?', args: [req.params.id] });
    res.json({ ok: true });
  } catch (err) {
    console.error('Error borrando resultado:', err);
    res.status(500).json({ ok: false, error: 'Error al borrar el resultado' });
  }
});

// Exportar todos los resultados a un archivo Excel (.xlsx) - protegido
app.get('/api/export/xlsx', checkTeacherPassword, async (req, res) => {
  try {
    const result = await db.execute('SELECT * FROM results ORDER BY id DESC');
    const rows = result.rows;

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Resultados');

    sheet.columns = [
      { header: 'ID', key: 'id', width: 6 },
      { header: 'Nombre', key: 'name', width: 30 },
      { header: 'Grupo', key: 'student_group', width: 16 },
      { header: 'Puntuación', key: 'score', width: 12 },
      { header: 'Total Preguntas', key: 'total_questions', width: 15 },
      { header: 'Porcentaje', key: 'percentage', width: 12 },
      { header: 'Fecha Examen', key: 'exam_date', width: 15 },
      { header: 'Duración', key: 'duration', width: 12 },
      { header: 'Cambios de Pestaña', key: 'tab_switch_count', width: 18 },
      { header: 'Salidas Pantalla Completa', key: 'fullscreen_exit_count', width: 22 },
      { header: '¿Hizo Trampa?', key: 'cheating_flag', width: 15 },
      { header: 'Razón de Bloqueo', key: 'block_reason', width: 30 },
      { header: 'Estatus', key: 'status', width: 14 },
      { header: 'Registrado el', key: 'created_at', width: 20 }
    ];

    sheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF0047AB' }
    };
    sheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };

    rows.forEach(r => {
      const newRow = sheet.addRow({
        id: r.id,
        name: r.name,
        student_group: r.student_group,
        score: r.score,
        total_questions: r.total_questions,
        percentage: r.percentage,
        exam_date: r.exam_date,
        duration: r.duration,
        tab_switch_count: r.tab_switch_count,
        fullscreen_exit_count: r.fullscreen_exit_count,
        cheating_flag: r.cheating_detected ? 'SÍ' : 'No',
        block_reason: r.block_reason || '',
        status: r.status,
        created_at: r.created_at
      });

      // Resaltar en rojo claro las filas donde hubo trampa
      if (r.cheating_detected) {
        newRow.eachCell(cell => {
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFFFCDD2' }
          };
        });
      }
    });

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="resultados_examen_${new Date().toISOString().slice(0, 10)}.xlsx"`
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error('Error exportando a Excel:', err);
    res.status(500).json({ ok: false, error: 'Error al generar el archivo Excel' });
  }
});

initDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor del examen corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('No se pudo inicializar la base de datos:', err);
    process.exit(1);
  });
