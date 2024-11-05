<<<<<<< HEAD
// script.js

const palabrasYPistas = [
    { palabra: 'CONFERENCIA', pista: '¿Evento formal donde uno o varios expertos exponen sobre un tema específico?' },
    { palabra: 'SEMINARIO', pista: '¿Reunión especializada que tiene naturaleza técnica y académica?' },
    { palabra: 'CONGRESO', pista: '¿Evento de gran magnitud donde profesionales comparten conocimientos?' },
    { palabra: 'SIMPOSIO', pista: '¿Reunión de expertos en la que se expone y desarrolla un tema detalladamente?' },
    { palabra: 'PONENCIA', pista: '¿Exposición oral de un tema específico ante un público?' }
];

let palabraActual = '';
let pistaActual = '';
let letrasAdivinadas = new Set();
let intentosRestantes = 6;
let juegoTerminado = false;

const canvas = document.getElementById('hangmanCanvas');
const ctx = canvas.getContext('2d');

function dibujarAhorcado(intentos) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, 200);
    ctx.lineTo(150, 200);
    ctx.moveTo(100, 200);
    ctx.lineTo(100, 50);
    ctx.lineTo(150, 50);
    ctx.lineTo(150, 70);
    ctx.stroke();
    if (intentos < 6) ctx.arc(150, 90, 20, 0, Math.PI * 2).stroke();
    if (intentos < 5) ctx.moveTo(150, 110).lineTo(150, 150).stroke();
    if (intentos < 4) ctx.moveTo(150, 120).lineTo(120, 140).stroke();
    if (intentos < 3) ctx.moveTo(150, 120).lineTo(180, 140).stroke();
    if (intentos < 2) ctx.moveTo(150, 150).lineTo(120, 180).stroke();
    if (intentos < 1) ctx.moveTo(150, 150).lineTo(180, 180).stroke();
}

function iniciarJuego() {
    const indiceAleatorio = Math.floor(Math.random() * palabrasYPistas.length);
    palabraActual = palabrasYPistas[indiceAleatorio].palabra;
    pistaActual = palabrasYPistas[indiceAleatorio].pista;
    letrasAdivinadas = new Set();
    intentosRestantes = 6;
    juegoTerminado = false;
    document.getElementById('attempts').textContent = intentosRestantes;
    document.getElementById('hint').style.display = 'none';
    document.getElementById('message').className = 'message';
    document.getElementById('message').textContent = '';
    actualizarPalabraVisible();
    actualizarTeclado();
    dibujarAhorcado(6);
}

function actualizarPalabraVisible() {
    const wordContainer = document.getElementById('wordContainer');
    wordContainer.innerHTML = '';
    [...palabraActual].forEach(letra => {
        const span = document.createElement('span');
        span.className = 'letter-space';
        span.textContent = letrasAdivinadas.has(letra) ? letra : '';
        wordContainer.appendChild(span);
    });
}

function crearTeclado() {
    const keyboard = document.getElementById('keyboard');
    'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('').forEach(letra => {
        const button = document.createElement('button');
        button.textContent = letra;
        button.onclick = () => verificarLetra(letra);
        keyboard.appendChild(button);
    });
}

function actualizarTeclado() {
    const botones = document.getElementById('keyboard').getElementsByTagName('button');
    [...botones].forEach(boton => {
        boton.disabled = letrasAdivinadas.has(boton.textContent) || juegoTerminado;
    });
}

function verificarLetra(letra) {
    if (juegoTerminado || letrasAdivinadas.has(letra)) return;

    letrasAdivinadas.add(letra);
    
    if (!palabraActual.includes(letra)) {
        intentosRestantes--;
        document.getElementById('attempts').textContent = intentosRestantes;
        dibujarAhorcado(intentosRestantes);

        if (intentosRestantes === 0) {
            mostrarMensaje(`¡Perdiste! La palabra era: ${palabraActual}`, 'error');
            juegoTerminado = true;
        }
    }

    const todasLasLetrasAdivinadas = [...palabraActual]
        .every(letra => letrasAdivinadas.has(letra));

    if (todasLasLetrasAdivinadas) {
        mostrarMensaje('¡Felicitaciones! ¡Has ganado!', 'success');
        juegoTerminado = true;
    }

    actualizarPalabraVisible();
    actualizarTeclado();
}

function mostrarMensaje(texto, tipo) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = texto;
    messageDiv.className = `message ${tipo}`;
}

// Event Listeners
document.getElementById('newGameBtn').onclick = iniciarJuego;
document.getElementById('showHintBtn').onclick = () => {
    const hintDiv = document.getElementById('hint');
    hintDiv.textContent = pistaActual;
    hintDiv.style.display = 'block';
};

// Iniciar el juego
crearTeclado();
=======
// script.js

const palabrasYPistas = [
    { palabra: 'CONFERENCIA', pista: '¿Evento formal donde uno o varios expertos exponen sobre un tema específico?' },
    { palabra: 'SEMINARIO', pista: '¿Reunión especializada que tiene naturaleza técnica y académica?' },
    { palabra: 'CONGRESO', pista: '¿Evento de gran magnitud donde profesionales comparten conocimientos?' },
    { palabra: 'SIMPOSIO', pista: '¿Reunión de expertos en la que se expone y desarrolla un tema detalladamente?' },
    { palabra: 'PONENCIA', pista: '¿Exposición oral de un tema específico ante un público?' }
];

let palabraActual = '';
let pistaActual = '';
let letrasAdivinadas = new Set();
let intentosRestantes = 6;
let juegoTerminado = false;

const canvas = document.getElementById('hangmanCanvas');
const ctx = canvas.getContext('2d');

function dibujarAhorcado(intentos) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, 200);
    ctx.lineTo(150, 200);
    ctx.moveTo(100, 200);
    ctx.lineTo(100, 50);
    ctx.lineTo(150, 50);
    ctx.lineTo(150, 70);
    ctx.stroke();
    if (intentos < 6) ctx.arc(150, 90, 20, 0, Math.PI * 2).stroke();
    if (intentos < 5) ctx.moveTo(150, 110).lineTo(150, 150).stroke();
    if (intentos < 4) ctx.moveTo(150, 120).lineTo(120, 140).stroke();
    if (intentos < 3) ctx.moveTo(150, 120).lineTo(180, 140).stroke();
    if (intentos < 2) ctx.moveTo(150, 150).lineTo(120, 180).stroke();
    if (intentos < 1) ctx.moveTo(150, 150).lineTo(180, 180).stroke();
}

function iniciarJuego() {
    const indiceAleatorio = Math.floor(Math.random() * palabrasYPistas.length);
    palabraActual = palabrasYPistas[indiceAleatorio].palabra;
    pistaActual = palabrasYPistas[indiceAleatorio].pista;
    letrasAdivinadas = new Set();
    intentosRestantes = 6;
    juegoTerminado = false;
    document.getElementById('attempts').textContent = intentosRestantes;
    document.getElementById('hint').style.display = 'none';
    document.getElementById('message').className = 'message';
    document.getElementById('message').textContent = '';
    actualizarPalabraVisible();
    actualizarTeclado();
    dibujarAhorcado(6);
}

function actualizarPalabraVisible() {
    const wordContainer = document.getElementById('wordContainer');
    wordContainer.innerHTML = '';
    [...palabraActual].forEach(letra => {
        const span = document.createElement('span');
        span.className = 'letter-space';
        span.textContent = letrasAdivinadas.has(letra) ? letra : '';
        wordContainer.appendChild(span);
    });
}

function crearTeclado() {
    const keyboard = document.getElementById('keyboard');
    'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('').forEach(letra => {
        const button = document.createElement('button');
        button.textContent = letra;
        button.onclick = () => verificarLetra(letra);
        keyboard.appendChild(button);
    });
}

function actualizarTeclado() {
    const botones = document.getElementById('keyboard').getElementsByTagName('button');
    [...botones].forEach(boton => {
        boton.disabled = letrasAdivinadas.has(boton.textContent) || juegoTerminado;
    });
}

function verificarLetra(letra) {
    if (juegoTerminado || letrasAdivinadas.has(letra)) return;

    letrasAdivinadas.add(letra);
    
    if (!palabraActual.includes(letra)) {
        intentosRestantes--;
        document.getElementById('attempts').textContent = intentosRestantes;
        dibujarAhorcado(intentosRestantes);

        if (intentosRestantes === 0) {
            mostrarMensaje(`¡Perdiste! La palabra era: ${palabraActual}`, 'error');
            juegoTerminado = true;
        }
    }

    const todasLasLetrasAdivinadas = [...palabraActual]
        .every(letra => letrasAdivinadas.has(letra));

    if (todasLasLetrasAdivinadas) {
        mostrarMensaje('¡Felicitaciones! ¡Has ganado!', 'success');
        juegoTerminado = true;
    }

    actualizarPalabraVisible();
    actualizarTeclado();
}

function mostrarMensaje(texto, tipo) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = texto;
    messageDiv.className = `message ${tipo}`;
}

// Event Listeners
document.getElementById('newGameBtn').onclick = iniciarJuego;
document.getElementById('showHintBtn').onclick = () => {
    const hintDiv = document.getElementById('hint');
    hintDiv.textContent = pistaActual;
    hintDiv.style.display = 'block';
};

// Iniciar el juego
crearTeclado();
>>>>>>> 23bb1d850c3742fe9daca25bc48a74ede589a927
iniciarJuego();