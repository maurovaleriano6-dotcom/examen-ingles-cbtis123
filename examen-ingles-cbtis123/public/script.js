// Banco de preguntas - Examen de Cultura General (Nivel Básico)
const quizData = [
    {
        "question": "¿Cuál es la capital de México?",
        "answers": [
            "Guadalajara",
            "Ciudad de México",
            "Monterrey",
            "Puebla"
        ],
        "correct": 1
    },
    {
        "question": "¿Cuántos días tiene un año normal?",
        "answers": [
            "360",
            "365",
            "366",
            "370"
        ],
        "correct": 1
    },
    {
        "question": "¿Cuál es el océano más grande del mundo?",
        "answers": [
            "Atlántico",
            "Índico",
            "Ártico",
            "Pacífico"
        ],
        "correct": 3
    },
    {
        "question": "¿Qué planeta es conocido como el planeta rojo?",
        "answers": [
            "Venus",
            "Marte",
            "Júpiter",
            "Saturno"
        ],
        "correct": 1
    },
    {
        "question": "¿Cuántos días tiene una semana?",
        "answers": [
            "5",
            "6",
            "7",
            "8"
        ],
        "correct": 2
    },
    {
        "question": "¿Cuál es el animal terrestre más grande?",
        "answers": [
            "Elefante africano",
            "Jirafa",
            "Rinoceronte",
            "Hipopótamo"
        ],
        "correct": 0
    },
    {
        "question": "¿En qué país se encuentra la Torre Eiffel?",
        "answers": [
            "Italia",
            "España",
            "Francia",
            "Alemania"
        ],
        "correct": 2
    },
    {
        "question": "¿Qué gas necesitamos respirar para vivir?",
        "answers": [
            "Oxígeno",
            "Nitrógeno",
            "Helio",
            "Hidrógeno"
        ],
        "correct": 0
    },
    {
        "question": "¿Cuántos colores tiene el arcoíris?",
        "answers": [
            "5",
            "6",
            "7",
            "8"
        ],
        "correct": 2
    },
    {
        "question": "¿Cuál es el resultado de 8 + 7?",
        "answers": [
            "14",
            "15",
            "16",
            "17"
        ],
        "correct": 1
    },
    {
        "question": "¿Cuál es el resultado de 6 × 4?",
        "answers": [
            "20",
            "22",
            "24",
            "26"
        ],
        "correct": 2
    },
    {
        "question": "¿Cuántos lados tiene un triángulo?",
        "answers": [
            "2",
            "3",
            "4",
            "5"
        ],
        "correct": 1
    },
    {
        "question": "¿Qué estación del año viene después del invierno?",
        "answers": [
            "Verano",
            "Otoño",
            "Primavera",
            "Invierno"
        ],
        "correct": 2
    },
    {
        "question": "¿Cuál es el planeta más cercano al Sol?",
        "answers": [
            "Mercurio",
            "Venus",
            "Tierra",
            "Marte"
        ],
        "correct": 0
    },
    {
        "question": "¿Quién pintó la Mona Lisa?",
        "answers": [
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Vincent van Gogh",
            "Miguel Ángel"
        ],
        "correct": 1
    },
    {
        "question": "¿En qué año llegó Cristóbal Colón a América?",
        "answers": [
            "1392",
            "1492",
            "1592",
            "1692"
        ],
        "correct": 1
    },
    {
        "question": "¿Cuántos meses tiene un año?",
        "answers": [
            "10",
            "11",
            "12",
            "13"
        ],
        "correct": 2
    },
    {
        "question": "¿A qué temperatura hierve el agua al nivel del mar?",
        "answers": [
            "50 °C",
            "80 °C",
            "100 °C",
            "120 °C"
        ],
        "correct": 2
    },
    {
        "question": "¿Qué órgano bombea la sangre en el cuerpo humano?",
        "answers": [
            "Pulmón",
            "Hígado",
            "Corazón",
            "Riñón"
        ],
        "correct": 2
    },
    {
        "question": "¿Cuál es el idioma que se habla en Brasil?",
        "answers": [
            "Español",
            "Portugués",
            "Inglés",
            "Francés"
        ],
        "correct": 1
    },
    {
        "question": "¿Qué instrumento musical tiene teclas blancas y negras?",
        "answers": [
            "Guitarra",
            "Violín",
            "Piano",
            "Flauta"
        ],
        "correct": 2
    },
    {
        "question": "¿Cuál es la capital de España?",
        "answers": [
            "Barcelona",
            "Madrid",
            "Sevilla",
            "Valencia"
        ],
        "correct": 1
    },
    {
        "question": "¿Cuántos jugadores de un equipo están en la cancha en un partido de fútbol?",
        "answers": [
            "9",
            "10",
            "11",
            "12"
        ],
        "correct": 2
    },
    {
        "question": "¿Cómo se llama el agua en estado sólido?",
        "answers": [
            "Vapor",
            "Hielo",
            "Nube",
            "Lluvia"
        ],
        "correct": 1
    },
    {
        "question": "¿Qué animal es conocido como el rey de la selva?",
        "answers": [
            "Tigre",
            "León",
            "Oso",
            "Lobo"
        ],
        "correct": 1
    },
    {
        "question": "¿Cuál es el país más grande del mundo por su superficie?",
        "answers": [
            "Canadá",
            "China",
            "Rusia",
            "Estados Unidos"
        ],
        "correct": 2
    },
    {
        "question": "¿Qué festividad mexicana se celebra el 2 de noviembre?",
        "answers": [
            "Día de Muertos",
            "Día de la Independencia",
            "Navidad",
            "Año Nuevo"
        ],
        "correct": 0
    },
    {
        "question": "¿Cuántos minutos tiene una hora?",
        "answers": [
            "30",
            "50",
            "60",
            "100"
        ],
        "correct": 2
    },
    {
        "question": "¿Qué parte de la planta absorbe el agua del suelo?",
        "answers": [
            "Hoja",
            "Raíz",
            "Flor",
            "Fruto"
        ],
        "correct": 1
    },
    {
        "question": "¿Cuál es el satélite natural de la Tierra?",
        "answers": [
            "Sol",
            "Luna",
            "Venus",
            "Marte"
        ],
        "correct": 1
    }
];
// Variables globales
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let examTimer = null;
let timeRemaining = 3600; // 60 minutos en segundos
let startTime = null;
let examActive = false;
let cheatingDetected = false;
let tabSwitchCount = 0;
let fullscreenExitCount = 0;
let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
let studentData = {};
let cheatLog = [];

// ========== ENVÍO DE RESULTADOS AL SERVIDOR ==========
// Como el servidor sirve esta misma página, la ruta relativa
// '/api/...' siempre apunta al backend correcto, sin importar
// el dominio donde termines publicando el examen.
function sendResultToServer(payload) {
    fetch('/api/exam-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).catch((err) => {
        // Si falla el guardado (sin internet, servidor caído, etc.)
        // no interrumpimos el examen del alumno, solo lo registramos.
        console.error('No se pudo guardar el resultado en el servidor:', err);
    });
}

// ========== SISTEMA DE LOGIN ==========
function validateLogin() {
    const name = document.getElementById('studentName').value.trim();
    const group = document.getElementById('studentGroup').value.trim();

    // Validaciones
    if (!name) {
        showAlert('Por favor ingresa tu nombre completo');
        document.getElementById('studentName').focus();
        return;
    }
    if (name.length < 3) {
        showAlert('El nombre debe tener al menos 3 caracteres');
        document.getElementById('studentName').focus();
        return;
    }
    if (!group) {
        showAlert('Por favor ingresa tu grupo');
        document.getElementById('studentGroup').focus();
        return;
    }

    // Guardar datos del estudiante
    studentData = {
        name: name,
        group: group,
        loginTime: new Date().toLocaleString()
    };

    // Mostrar pantalla de inicio
    showStartScreen();
}

function showStartScreen() {
    // Actualizar información en pantalla de inicio
    document.getElementById('displayName').textContent = studentData.name;
    document.getElementById('infoName').textContent = studentData.name;
    document.getElementById('infoGroup').textContent = studentData.group;

    // Cambiar pantallas
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

function returnToLogin() {
    // Resetear variables
    examActive = false;
    cheatingDetected = false;
    tabSwitchCount = 0;
    fullscreenExitCount = 0;
    studentData = {};
    cheatLog = [];

    // Detener temporizador si existe
    if (examTimer) {
        clearInterval(examTimer);
    }

    // Ocultar todas las pantallas excepto login
    document.getElementById('loginScreen').style.display = 'block';
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'none';
    document.getElementById('blockedScreen').style.display = 'none';
    document.getElementById('fullscreenWarning').style.display = 'none';
    document.getElementById('cheatCounter').style.display = 'none';
    document.getElementById('cheatWarningPopup').style.display = 'none';

    // Resetear formulario
    document.getElementById('studentName').value = '';
    document.getElementById('studentGroup').value = '';

    // Resetear temporizador visual
    document.getElementById('timer').textContent = '60:00';
    document.getElementById('timer').classList.remove('warning');

    exitFullscreen();
}

function showAlert(message) {
    // Crear alerta personalizada
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #ff4444;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        font-weight: bold;
    `;
    alertDiv.textContent = '⚠️ ' + message;
    document.body.appendChild(alertDiv);

    // Remover después de 3 segundos
    setTimeout(() => {
        document.body.removeChild(alertDiv);
    }, 3000);
}

// ========== FUNCIONES DEL EXAMEN ==========
function startExam() {
    if (cheatingDetected) {
        showAlert('Examen bloqueado por trampa. Debe reiniciar.');
        return;
    }

    // Actualizar información mini en el examen
    document.getElementById('miniName').textContent = studentData.name;
    document.getElementById('miniGroup').textContent = studentData.group;

    // Mostrar contador de trampas si es necesario
    if (tabSwitchCount > 0 || fullscreenExitCount > 0) {
        document.getElementById('cheatCounter').style.display = 'block';
        document.getElementById('cheatCount').textContent = tabSwitchCount + fullscreenExitCount;
    }

    enterFullscreen().then(() => {
        currentQuestions = selectRandomQuestions();
        currentQuestionIndex = 0;
        score = 0;
        timeRemaining = 3600;
        startTime = Date.now();
        examActive = true;

        // Ocultar/mostrar pantallas
        document.getElementById('startScreen').style.display = 'none';
        document.getElementById('questionContainer').style.display = 'block';
        document.getElementById('resultsScreen').style.display = 'none';
        document.getElementById('fullscreenWarning').style.display = 'none';
        document.getElementById('blockedScreen').style.display = 'none';

        startTimer();
        showQuestion();
        
        // Mensaje para usuarios de iOS
        if (isIOS) {
            showAlert('📱 iPhone/iPad detectado: Por favor no cambies de aplicación durante el examen.');
        }

        // Registrar inicio de examen
        logCheatAttempt('Examen iniciado', 'INFO');
    }).catch((error) => {
        if (!isIOS) {
            showAlert('Debes permitir pantalla completa para continuar con el examen.');
        } else {
            // Iniciar de todos modos en iOS
            currentQuestions = selectRandomQuestions();
            currentQuestionIndex = 0;
            score = 0;
            timeRemaining = 3600;
            startTime = Date.now();
            examActive = true;

            document.getElementById('startScreen').style.display = 'none';
            document.getElementById('questionContainer').style.display = 'block';
            document.getElementById('resultsScreen').style.display = 'none';

            startTimer();
            showQuestion();
            logCheatAttempt('Examen iniciado en iOS', 'INFO');
        }
    });
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function selectRandomQuestions() {
    const shuffled = shuffleArray(quizData);
    // Mezclar también el orden de las respuestas de cada pregunta
    return shuffled.slice(0, 30).map(q => {
        const options = q.answers.map((text, i) => ({ text, isCorrect: i === q.correct }));
        const mixed = shuffleArray(options);
        return {
            question: q.question,
            answers: mixed.map(o => o.text),
            correct: mixed.findIndex(o => o.isCorrect)
        };
    });
}

// ========== SISTEMA ANTI-TRAMPAS ==========
function createAlertSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Audio no disponible');
    }
}

function showCheatWarning(message) {
    const popup = document.getElementById('cheatWarningPopup');
    const text = document.getElementById('cheatWarningText');
    
    text.textContent = message;
    popup.style.display = 'block';
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}

function logCheatAttempt(action, type = 'WARNING') {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = {
        time: timestamp,
        action: action,
        type: type,
        student: studentData.name
    };
    
    cheatLog.push(logEntry);
    console.log(`[${type}] ${timestamp} - ${action} - ${studentData.name}`);
}

function blockExam(reason) {
    cheatingDetected = true;
    examActive = false;
    clearInterval(examTimer);
    
    // Actualizar información en pantalla bloqueada
    document.getElementById('blockedName').textContent = studentData.name;
    document.getElementById('blockedGroup').textContent = studentData.group;
    document.getElementById('blockReason').textContent = reason;

    // Actualizar log de trampas
    const cheatLogList = document.getElementById('cheatLogList');
    cheatLogList.innerHTML = '';
    cheatLog.forEach(log => {
        const li = document.createElement('li');
        li.textContent = `[${log.time}] ${log.action}`;
        if (log.type === 'WARNING') {
            li.style.color = '#ffeb3b';
            li.style.borderLeftColor = '#ffeb3b';
        }
        cheatLogList.appendChild(li);
    });

    // Sonido de bloqueo
    createAlertSound();
    setTimeout(createAlertSound, 200);
    setTimeout(createAlertSound, 400);
    
    // Mostrar pantalla de bloqueo
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'none';
    document.getElementById('fullscreenWarning').style.display = 'none';
    document.getElementById('blockedScreen').style.display = 'block';
    document.getElementById('cheatCounter').style.display = 'none';
    document.getElementById('cheatWarningPopup').style.display = 'none';
    
    // Efecto visual
    const container = document.querySelector('.container');
    if (container) {
        container.classList.add('warning-flash');
    }
    
    // Registrar bloqueo
    logCheatAttempt(`EXAMEN BLOQUEADO: ${reason}`, 'BLOCKED');

    // Guardar en el servidor el intento bloqueado, con el avance que llevaba
    const totalQuestions = currentQuestions.length || 30;
    const percentageSoFar = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0;
    sendResultToServer({
        name: studentData.name,
        group: studentData.group,
        score: score,
        totalQuestions: totalQuestions,
        percentage: percentageSoFar,
        examDate: new Date().toLocaleDateString(),
        duration: '',
        tabSwitchCount: tabSwitchCount,
        fullscreenExitCount: fullscreenExitCount,
        cheatingDetected: true,
        blockReason: reason,
        cheatLog: cheatLog,
        status: 'bloqueado'
    });

    exitFullscreen();
}

// ========== DETECCIÓN DE TRAMPAS ==========
document.addEventListener('visibilitychange', function() {
    if (examActive && !cheatingDetected) {
        if (document.hidden) {
            tabSwitchCount++;
            logCheatAttempt(`Cambio de pestaña detectado (${tabSwitchCount}/3)`);
            
            // Actualizar contador
            document.getElementById('cheatCounter').style.display = 'block';
            document.getElementById('cheatCount').textContent = tabSwitchCount + fullscreenExitCount;
            
            createAlertSound();
            showCheatWarning(`¡Alerta! Cambio de pestaña detectado (${tabSwitchCount}/3)`);
            
            // En iOS somos más permisivos
            if (!isIOS && tabSwitchCount >= 3) {
                blockExam('Múltiples cambios de pestaña detectados');
            } else if (isIOS && tabSwitchCount > 5) {
                blockExam('Múltiples cambios de aplicación en iOS');
            }
        }
    }
});

// Detectar salida de pantalla completa
if (!isIOS) {
    document.addEventListener('fullscreenchange', function() {
        if (examActive && !cheatingDetected) {
            if (!document.fullscreenElement) {
                fullscreenExitCount++;
                logCheatAttempt(`Salida de pantalla completa (${fullscreenExitCount}/2)`);
                
                // Actualizar contador
                document.getElementById('cheatCounter').style.display = 'block';
                document.getElementById('cheatCount').textContent = tabSwitchCount + fullscreenExitCount;
                
                const warningEl = document.getElementById('fullscreenWarning');
                if (warningEl) {
                    document.getElementById('remainingAttempts').textContent = 3 - fullscreenExitCount;
                    warningEl.style.display = 'block';
                }
                createAlertSound();
                showCheatWarning(`¡Alerta! Saliste de pantalla completa (${fullscreenExitCount}/2)`);
                
                if (fullscreenExitCount >= 3) {
                    blockExam('Múltiples intentos de salir de pantalla completa');
                }
            }
        }
    });

    document.addEventListener('webkitfullscreenchange', function() {
        if (examActive && !cheatingDetected) {
            if (!document.webkitFullscreenElement) {
                fullscreenExitCount++;
                logCheatAttempt(`Salida de pantalla completa WebKit (${fullscreenExitCount}/2)`);
                
                document.getElementById('cheatCounter').style.display = 'block';
                document.getElementById('cheatCount').textContent = tabSwitchCount + fullscreenExitCount;
                
                const warningEl = document.getElementById('fullscreenWarning');
                if (warningEl) {
                    document.getElementById('remainingAttempts').textContent = 3 - fullscreenExitCount;
                    warningEl.style.display = 'block';
                }
                createAlertSound();
                showCheatWarning(`¡Alerta! Saliste de pantalla completa (${fullscreenExitCount}/2)`);
                
                if (fullscreenExitCount >= 3) {
                    blockExam('Múltiples intentos de salir de pantalla completa');
                }
            }
        }
    });
}

// ========== FUNCIONES DE PANTALLA COMPLETA ==========
function enterFullscreen() {
    // iOS Safari no soporta pantalla completa
    if (isIOS) {
        return Promise.resolve();
    }
    
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        return elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        return elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        return elem.msRequestFullscreen();
    }
    return Promise.resolve();
}

function exitFullscreen() {
    if (isIOS) {
        return;
    }
    
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function returnToFullscreen() {
    const warningEl = document.getElementById('fullscreenWarning');
    if (warningEl) {
        warningEl.style.display = 'none';
    }
    enterFullscreen();
}

// ========== TEMPORIZADOR ==========
function startTimer() {
    examTimer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        const timerEl = document.getElementById('timer');
        if (timeRemaining <= 300 && timerEl) { // 5 minutos
            timerEl.classList.add('warning');
        }

        if (timeRemaining <= 0) {
            endExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timerEl = document.getElementById('timer');
    const currentTimerEl = document.getElementById('currentTimer');
    
    if (timerEl) {
        timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    if (currentTimerEl) {
        currentTimerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// ========== MANEJO DE PREGUNTAS ==========
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;

    const progressFill = document.getElementById('progressFill');
    const currentQuestionEl = document.getElementById('currentQuestion');
    const currentScoreEl = document.getElementById('currentScore');
    const questionText = document.getElementById('questionText');
    
    if (progressFill) progressFill.style.width = `${progress}%`;
    if (currentQuestionEl) currentQuestionEl.textContent = currentQuestionIndex + 1;
    if (currentScoreEl) currentScoreEl.textContent = score;
    if (questionText) questionText.textContent = question.question;

    const answersContainer = document.getElementById('answersContainer');
    if (answersContainer) {
        answersContainer.innerHTML = '';

        question.answers.forEach((answer, index) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer';
            answerDiv.textContent = answer;
            answerDiv.onclick = () => selectAnswer(index);
            answersContainer.appendChild(answerDiv);
        });
    }

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.classList.remove('show');
    }
    selectedAnswer = null;
}

function selectAnswer(index) {
    if (selectedAnswer !== null) return; // Evitar múltiples selecciones
    
    selectedAnswer = index;
    
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => answer.classList.remove('selected'));
    answers[index].classList.add('selected');

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.classList.add('show');
    }
}

function nextQuestion() {
    if (selectedAnswer === null) {
        showAlert('Por favor selecciona una respuesta antes de continuar');
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    const answers = document.querySelectorAll('.answer');

    // Mostrar respuesta correcta/incorrecta
    answers.forEach((answer, index) => {
        if (index === question.correct) {
            answer.classList.add('correct');
        } else if (index === selectedAnswer && index !== question.correct) {
            answer.classList.add('incorrect');
        }
    });

    // Incrementar puntuación si es correcta
    if (selectedAnswer === question.correct) {
        score++;
    }

    // Avanzar a la siguiente pregunta o terminar
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            endExam();
        }
    }, 1500);
}

// ========== FINALIZACIÓN DEL EXAMEN ==========
function endExam() {
    examActive = false;
    clearInterval(examTimer);
    
    const timeSpent = 3600 - timeRemaining;
    const timeUsedMinutes = Math.floor(timeSpent / 60);
    const timeUsedSeconds = timeSpent % 60;
    const totalQuestions = currentQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    // Actualizar información en resultados
    document.getElementById('resultName').textContent = studentData.name;
    document.getElementById('resultGroup').textContent = studentData.group;
    document.getElementById('examDate').textContent = new Date().toLocaleDateString();
    document.getElementById('examDuration').textContent = `${timeUsedMinutes}:${timeUsedSeconds.toString().padStart(2, '0')}`;

    document.getElementById('finalScore').textContent = `${score}/${totalQuestions}`;
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('incorrectAnswers').textContent = totalQuestions - score;
    document.getElementById('percentage').textContent = `${percentage}%`;
    document.getElementById('timeUsed').textContent = `${timeUsedMinutes}:${timeUsedSeconds.toString().padStart(2, '0')}`;

    // Mostrar reporte de seguridad si hubo advertencias
    if (tabSwitchCount > 0 || fullscreenExitCount > 0) {
        const cheatReport = document.getElementById('cheatReport');
        const cheatList = document.getElementById('cheatReportList');
        
        cheatList.innerHTML = '';
        if (tabSwitchCount > 0) {
            const li = document.createElement('li');
            li.textContent = `Cambios de pestaña detectados: ${tabSwitchCount}`;
            cheatList.appendChild(li);
        }
        if (fullscreenExitCount > 0) {
            const li = document.createElement('li');
            li.textContent = `Salidas de pantalla completa: ${fullscreenExitCount}`;
            cheatList.appendChild(li);
        }
        
        cheatReport.style.display = 'block';
    }

    // Registrar finalización
    logCheatAttempt(`Examen completado - Puntuación: ${score}/${totalQuestions} (${percentage}%)`, 'INFO');

    // Guardar el resultado final en el servidor
    sendResultToServer({
        name: studentData.name,
        group: studentData.group,
        score: score,
        totalQuestions: totalQuestions,
        percentage: percentage,
        examDate: new Date().toLocaleDateString(),
        duration: `${timeUsedMinutes}:${timeUsedSeconds.toString().padStart(2, '0')}`,
        tabSwitchCount: tabSwitchCount,
        fullscreenExitCount: fullscreenExitCount,
        cheatingDetected: (tabSwitchCount > 0 || fullscreenExitCount > 0),
        blockReason: null,
        cheatLog: cheatLog,
        status: 'completado'
    });

    // Cambiar pantallas
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'block';
    document.getElementById('cheatCounter').style.display = 'none';
    document.getElementById('cheatWarningPopup').style.display = 'none';
    
    exitFullscreen();
}

function restartExam() {
    returnToLogin();
}

// ========== FUNCIONES ADICIONALES ==========
function toggleSound() {
    const soundBtn = document.querySelector('.sound-toggle-btn');
    if (soundBtn.textContent === '🔊') {
        soundBtn.textContent = '🔇';
        showAlert('Sonido desactivado');
    } else {
        soundBtn.textContent = '🔊';
        showAlert('Sonido activado');
    }
}

// Permitir usar Enter en el formulario de login
document.addEventListener('DOMContentLoaded', function() {
    // Enter en el formulario de login
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                validateLogin();
            }
        });
    }

    // Prevenir Ctrl+C, Ctrl+V, etc. durante el examen
    document.addEventListener('keydown', function(e) {
        if (examActive && (e.ctrlKey || e.metaKey)) {
            if (e.key === 'c' || e.key === 'v' || e.key === 'a' || e.key === 'x') {
                e.preventDefault();
                showCheatWarning('Acción bloqueada durante el examen');
                logCheatAttempt(`Intento de uso de atajo: ${e.key}`, 'WARNING');
            }
        }
        
        // Prevenir F5 y F12
        if (e.key === 'F5' || e.key === 'F12') {
            e.preventDefault();
            if (examActive) {
                blockExam('Intento de recarga o inspección de código');
            }
        }
    });

    // Prevenir clic derecho
    document.addEventListener('contextmenu', function(e) {
        if (examActive) {
            e.preventDefault();
            showCheatWarning('Menú contextual bloqueado');
            logCheatAttempt('Intento de clic derecho', 'WARNING');
        }
    });

    // Prevenir arrastrar y soltar
    document.addEventListener('dragstart', function(e) {
        if (examActive) {
            e.preventDefault();
        }
    });

    document.addEventListener('drop', function(e) {
        if (examActive) {
            e.preventDefault();
        }
    });

    updateTimerDisplay();
    
    // Mostrar pantalla de login por defecto
    document.getElementById('loginScreen').style.display = 'block';
});

// Prevenir zoom en iOS
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

document.addEventListener('touchmove', function(event) {
    // Solo bloquear el pellizco de zoom (2 dedos); el scroll de 1 dedo debe funcionar
    if (event.touches && event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// ========== COMPATIBILIDAD CON iOS ==========
if (isIOS) {
    document.addEventListener('DOMContentLoaded', function() {
        const rulesList = document.querySelector('.exam-rules ul');
        if (rulesList) {
            const iosWarning = document.createElement('li');
            iosWarning.innerHTML = '<strong>📱 iOS DETECTADO:</strong> Se permiten hasta 5 cambios de aplicación antes del bloqueo automático';
            iosWarning.style.color = '#ffeb3b';
            rulesList.appendChild(iosWarning);
        }
    });
}