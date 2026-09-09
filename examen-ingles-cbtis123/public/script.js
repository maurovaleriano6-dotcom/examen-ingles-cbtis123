// Base de datos de preguntas del Semestre 1 - Nivel Básico (3AM-MEC)
const quizData = [
    // Sección 1: There is / There are (10 preguntas)
    {
        "question": "1. _______________________ a library next to the park.",
        "answers": [
            "There is",
            "There are",
            "There has",
            "There have"
        ],
        "correct": 0
    },
    {
        "question": "2. _______________________ 50 states in the United States.",
        "answers": [
            "There is",
            "There are",
            "There has",
            "There have"
        ],
        "correct": 1
    },
    {
        "question": "3. No, _______________________ polar bears at the South Pole.",
        "answers": [
            "there isn't",
            "there aren't",
            "there is",
            "there are"
        ],
        "correct": 1
    },
    {
        "question": "4. A: _____________________ a message for me? B: No, _____.",
        "answers": [
            "Is there / there isn't",
            "Are there / there aren't",
            "Is there / there aren't",
            "Are there / there isn't"
        ],
        "correct": 0
    },
    {
        "question": "5. Why _______________________ so many cars in the parking lot?",
        "answers": [
            "is there",
            "are there",
            "there is",
            "there are"
        ],
        "correct": 1
    },
    {
        "question": "6. A: I'm hungry. B: _______________________ a restaurant across the street.",
        "answers": [
            "There is",
            "There are",
            "There has",
            "There have"
        ],
        "correct": 0
    },
    {
        "question": "7. How many days _______________________ in March, thirty or thirty-one?",
        "answers": [
            "is there",
            "are there",
            "there is",
            "there are"
        ],
        "correct": 1
    },
    {
        "question": "8. _______________________ a few things I have to do this afternoon.",
        "answers": [
            "There is",
            "There are",
            "There has",
            "There have"
        ],
        "correct": 1
    },
    {
        "question": "9. A: _______________________ a post office nearby? B: I'm sorry, I don't know.",
        "answers": [
            "Is there",
            "Are there",
            "There is",
            "There are"
        ],
        "correct": 0
    },
    {
        "question": "10. _______________________ something I can help you with?",
        "answers": [
            "Is there",
            "Are there",
            "There is",
            "There are"
        ],
        "correct": 0
    },

    // Sección 2: Pronombres posesivos (10 preguntas)
    {
        "question": "11. Tom left ________ bag at school.",
        "answers": [
            "his",
            "hers",
            "their",
            "mine"
        ],
        "correct": 0
    },
    {
        "question": "12. The wallet with a lot of money in it is ________.",
        "answers": [
            "their",
            "yours",
            "her",
            "his"
        ],
        "correct": 1
    },
    {
        "question": "13. Chris and Kelly brought ________ daughter to school.",
        "answers": [
            "ours",
            "their",
            "yours",
            "mine"
        ],
        "correct": 1
    },
    {
        "question": "14. Is this ________ pencil?",
        "answers": [
            "your",
            "yours",
            "their",
            "theirs"
        ],
        "correct": 0
    },
    {
        "question": "15. That's not Chris' jacket. It's ________.",
        "answers": [
            "mine",
            "their",
            "yours",
            "hers"
        ],
        "correct": 0
    },
    {
        "question": "16. The cute white puppy is ________.",
        "answers": [
            "ours",
            "her",
            "his",
            "theirs"
        ],
        "correct": 0
    },
    {
        "question": "17. Kelly forgot to bring ________ homework today.",
        "answers": [
            "theirs",
            "her",
            "his",
            "yours"
        ],
        "correct": 1
    },
    {
        "question": "18. Who's food is this? Is it ________?",
        "answers": [
            "yours",
            "their",
            "hers",
            "his"
        ],
        "correct": 0
    },
    {
        "question": "19. This house belongs to Zara and Ben. It's ________.",
        "answers": [
            "ours",
            "theirs",
            "yours",
            "mine"
        ],
        "correct": 1
    },
    {
        "question": "20. Have you seen David? I think this pen is ________.",
        "answers": [
            "his",
            "theirs",
            "hers",
            "yours"
        ],
        "correct": 0
    },

    // Sección 3: Vocabulario de familia (5 preguntas)
    {
        "question": "21. My uncle's son is my ________.",
        "answers": [
            "cousin",
            "nephew",
            "brother",
            "son"
        ],
        "correct": 0
    },
    {
        "question": "22. My mother is my daughter's ________.",
        "answers": [
            "grandmother",
            "mother",
            "aunt",
            "sister"
        ],
        "correct": 0
    },
    {
        "question": "23. My mother's brother is my ________.",
        "answers": [
            "uncle",
            "cousin",
            "nephew",
            "brother"
        ],
        "correct": 0
    },
    {
        "question": "24. My sister's son is my ________.",
        "answers": [
            "nephew",
            "niece",
            "cousin",
            "son"
        ],
        "correct": 0
    },
    {
        "question": "25. My son's mother is my ________.",
        "answers": [
            "wife",
            "mother",
            "sister",
            "daughter"
        ],
        "correct": 0
    },

    // Sección 4: Vocabulario de ropa (5 preguntas)
    {
        "question": "26. ______ is a piece of clothing for girls and women that fits around the waist and hangs down like a dress.",
        "answers": [
            "skirt",
            "trousers",
            "blouse",
            "jacket"
        ],
        "correct": 0
    },
    {
        "question": "27. ______ is a piece of material that you wear around your neck, head, or shoulders, especially when it is cold.",
        "answers": [
            "shirt",
            "tie",
            "scarf",
            "glove"
        ],
        "correct": 2
    },
    {
        "question": "28. ______ is a shirt for women.",
        "answers": [
            "skirt",
            "t-shirt",
            "blouse",
            "blazer"
        ],
        "correct": 2
    },
    {
        "question": "29. ______ is a short coat.",
        "answers": [
            "blazer",
            "jacket",
            "suit",
            "blouse"
        ],
        "correct": 1
    },
    {
        "question": "30. ______ is a piece of clothing that you wear on your foot inside your shoe.",
        "answers": [
            "socks",
            "pants",
            "boot",
            "sleeve"
        ],
        "correct": 0
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
    return shuffled.slice(0, 30); // Asegurar 30 preguntas
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
    if (event.scale !== 1) {
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