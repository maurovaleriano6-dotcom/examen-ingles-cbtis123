# Examen de Inglés CBTIS 123 — con base de datos y exportación a Excel

Este paquete incluye:

- `public/index.html`, `public/styles.css`, `public/script.js` → tu examen (con pequeños añadidos para guardar resultados)
- `server.js` → el servidor que recibe y guarda los resultados
- `exam_results.db` → la base de datos (se crea sola la primera vez que corre el servidor)
- `public/teacher.html` → el panel donde ves los resultados y descargas el Excel

No necesitas saber programar para ponerlo en línea. Sigue estos pasos.

---

## 1. Prueba que funciona en tu computadora (opcional pero recomendado)

1. Instala [Node.js](https://nodejs.org) (versión LTS, botón grande verde).
2. Abre una terminal dentro de esta carpeta y escribe:
   ```
   npm install
   npm start
   ```
3. Abre tu navegador en `http://localhost:3000` → ahí está tu examen.
4. Abre `http://localhost:3000/teacher.html` → ahí está el panel del maestro.
   - Contraseña por defecto: `cbtis123-2026` (cámbiala, ver paso 4 más abajo).

---

## 2. Sube el proyecto a GitHub

1. Crea una cuenta gratis en [github.com](https://github.com) si no tienes.
2. Crea un repositorio nuevo (por ejemplo `examen-ingles-cbtis123`), público o privado, da igual.
3. Sube TODOS los archivos de esta carpeta a ese repositorio (puedes arrastrar los archivos
   directamente desde la página de GitHub con el botón "Add file" → "Upload files", no necesitas
   usar comandos de git si no quieres).

---

## 3. Despliega el servidor gratis en Render.com

1. Crea una cuenta gratis en [render.com](https://render.com) (puedes entrar con tu cuenta de GitHub).
2. Clic en **New +** → **Web Service**.
3. Conecta tu repositorio de GitHub (`examen-ingles-cbtis123`).
4. Render detecta que es un proyecto de Node. Configura:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
5. En la sección **Environment Variables**, agrega una variable:
   - **Key:** `TEACHER_PASSWORD`
   - **Value:** la contraseña que tú quieras usar para tu panel (ej: `MiClave2026!`)
6. Clic en **Create Web Service**. Espera 2-3 minutos.
7. Render te da una URL como `https://examen-ingles-cbtis123.onrender.com` — ¡esa es la liga que
   les compartes a tus alumnos!
8. Tu panel de resultados estará en:
   `https://examen-ingles-cbtis123.onrender.com/teacher.html`

> ⚠️ Nota sobre el plan gratis de Render: si el servicio no recibe visitas por 15 minutos, "se
> duerme" y tarda unos 30-50 segundos en despertar la próxima vez que alguien entra. Para un
> examen no es problema, solo dale a tus alumnos la liga un par de minutos antes de empezar.

> ⚠️ Nota sobre la base de datos: en el plan gratis de Render, los archivos que el servidor
> escribe en disco (como una base de datos local) pueden borrarse cuando el servicio se
> reinicia o se re-despliega. Por eso este proyecto usa **Turso**, una base de datos gratuita
> que vive fuera de Render y nunca se borra por sí sola. Sigue el paso 3.5 de abajo para
> configurarla (toma 5 minutos).

---

## 3.5 Configura tu base de datos gratuita en Turso

Turso guarda tus resultados de forma permanente y gratis, sin fecha de expiración, sin importar
lo que pase con tu servicio en Render.

1. Ve a [turso.tech](https://turso.tech) y crea una cuenta gratis (puedes entrar con GitHub).
2. En el panel, da clic en **"Create Database"** (o "New Database"). Ponle un nombre, por
   ejemplo `examen-ingles`, y elige la región más cercana a ti (ej. alguna de EE.UU. si estás
   en México). Espera a que se cree (unos segundos).
3. Dentro de tu base de datos, busca la pestaña **"Connect"** (o similar) — ahí verás una URL
   que empieza con `libsql://...`. Cópiala, es tu `TURSO_DATABASE_URL`.
4. En esa misma sección busca un botón para **"Create Token"** / **"Generate Token"**. Dale
   clic, copia el token que te da — es tu `TURSO_AUTH_TOKEN`. Guárdalo bien, no se vuelve a
   mostrar completo después.
5. Ve a tu servicio en Render → pestaña **Environment** → agrega dos variables nuevas:
   - **Key:** `TURSO_DATABASE_URL` → **Value:** la URL que copiaste (paso 3)
   - **Key:** `TURSO_AUTH_TOKEN` → **Value:** el token que copiaste (paso 4)
6. Guarda los cambios. Render va a reiniciar tu servicio automáticamente y a partir de ahí,
   todos los resultados se guardan en Turso — permanentes, sin importar cuántas veces se
   reinicie o redespliegue tu servicio en Render.

> 💡 Si no configuras estas dos variables, el servidor sigue funcionando (usa un archivo local
> como respaldo), pero ese archivo SÍ puede borrarse en Render. Para un semestre completo,
> configura Turso.

---

## 4. Cambiar la contraseña del panel del maestro

- Si lo corres en tu computadora: crea un archivo llamado `.env` (no lo subas a GitHub) con:
  ```
  TEACHER_PASSWORD=TuClaveSecreta
  ```
- Si lo corres en Render: cámbiala en **Environment Variables** (paso 3.5 de arriba) y Render
  reinicia el servicio automáticamente.

---

## ¿Qué guarda la base de datos por cada alumno?

- Nombre y grupo
- Puntuación y porcentaje
- Fecha y duración del examen
- Cuántas veces cambió de pestaña
- Cuántas veces salió de pantalla completa
- Si el examen fue bloqueado por trampa, y la razón
- El registro completo (log) de actividades sospechosas

Todo esto se puede descargar en un solo clic como archivo `.xlsx` desde el panel del maestro,
con las filas de alumnos que hicieron trampa resaltadas en rojo.
