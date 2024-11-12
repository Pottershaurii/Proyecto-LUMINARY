document.addEventListener('DOMContentLoaded', () => {
    const palabrasYPistas = [
        {
            palabra: 'CONFERENCIA',
            pista: '¿Evento formal donde uno o varios expertos exponen sobre un tema específico?'
        },
        {
            palabra: 'SEMINARIO',
            pista: '¿Reunión especializada que tiene naturaleza técnica y académica?'
        },
        {
            palabra: 'CONGRESO',
            pista: '¿Evento de gran magnitud donde profesionales comparten conocimientos?'
        },
        {
            palabra: 'SIMPOSIO',
            pista: '¿Reunión de expertos en la que se expone y desarrolla un tema detalladamente?'
        },
        {
            palabra: 'PONENCIA',
            pista: '¿Exposición oral de un tema específico ante un público?'
        }
    ];

    let palabraActual = '';
    let pistaActual = '';
    let letrasAdivinadas = new Set();
    let intentosRestantes = 6;
    let juegoTerminado = false;

    const canvas = document.getElementById('verdugo'); // Asegúrate de que el ID coincida con tu HTML
    const ctx = canvas.getContext('2d');

    function dibujarAhorcado(intentos) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        // Dibujo del ahorcado
        ctx.beginPath();
        ctx.moveTo(50, 200);
        ctx.lineTo(150, 200);
        ctx.moveTo(100, 200);
        ctx.lineTo(100, 50);
        ctx.lineTo(150, 50);
        ctx.lineTo(150, 70);
        ctx.stroke();

        if (intentos < 6) { ctx.beginPath(); ctx.arc(150, 90, 20, 0, Math.PI * 2); ctx.stroke(); }
        if (intentos < 5) { ctx.beginPath(); ctx.moveTo(150, 110); ctx.lineTo(150, 150); ctx.stroke(); }
        if (intentos < 4) { ctx.beginPath(); ctx.moveTo(150, 120); ctx.lineTo(120, 140); ctx.stroke(); }
        if (intentos < 3) { ctx.beginPath(); ctx.moveTo(150, 120); ctx.lineTo(180, 140); ctx.stroke(); }
        if (intentos < 2) { ctx.beginPath(); ctx.moveTo(150, 150); ctx.lineTo(120, 180); ctx.stroke(); }
        if (intentos < 1) { ctx.beginPath(); ctx.moveTo(150, 150); ctx.lineTo(180, 180); ctx.stroke(); }
    }

    function iniciarJuego() {
        const indiceAleatorio = Math.floor(Math.random() * palabrasYPistas.length);
        palabraActual = palabrasYPistas[indiceAleatorio].palabra;
        pistaActual = palabrasYPistas[indiceAleatorio].pista;
        letrasAdivinadas = new Set();
        intentosRestantes = 6;
        juegoTerminado = false;

        document.getElementById('intentos').textContent = intentosRestantes; // Cambié de 'attempts' a 'intentos'
        document.getElementById('pista').style.display = 'none'; // Cambié de 'hint' a 'pista'
        document.getElementById('mensaje').className = 'mensaje'; // Cambié de 'message' a 'mensaje'
        document.getElementById('mensaje').textContent = '';

        actualizarPalabraVisible();
        actualizarTeclado();
        dibujarAhorcado(6);
    }

    function actualizarPalabraVisible() {
        const wordContainer = document.getElementById('contenedordeOrdenes'); // Cambié de 'wordContainer' a 'contenedordeOrdenes'
        wordContainer.innerHTML = '';
        [...palabraActual].forEach(letra => {
            const span = document.createElement('span');
            span.className = 'espacioentreletras'; // Cambié de 'letter-space' a 'espacioentreletras'
            span.textContent = letrasAdivinadas.has(letra) ? letra : '';
            wordContainer.appendChild(span);
        });
    }

    function crearTeclado() {
        const keyboard = document.getElementById('teclado'); // Cambié de 'keyboard' a 'teclado'
        'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('').forEach(letra => {
            const button = document.createElement('button');
            button.textContent = letra;
            button.onclick = () => verificarLetra(letra);
            keyboard.appendChild(button);
        });
    }

    function actualizarTeclado() {
        const botones = document.getElementById('teclado').getElementsByTagName('button'); // Cambié de 'keyboard' a 'teclado'
        [...botones].forEach(boton => {
            boton.disabled = letrasAdivinadas.has(boton.textContent) || juegoTerminado;
        });
    }

    function verificarLetra(letra) {
        if (juegoTerminado || letrasAdivinadas.has(letra)) return;

        letrasAdivinadas.add(letra);
        if (!palabraActual.includes(letra)) {
            intentosRestantes--;
            document.getElementById('intentos').textContent = intentosRestantes; // Cambié de 'attempts' a 'intentos'
            dibujarAhorcado(intentosRestantes);

            if (intentosRestantes === 0) {
                mostrarMensaje(`¡Perdiste! La palabra era: ${palabraActual}`, 'error');
                juegoTerminado = true;
            }
        }

        const todasLasLetrasAdivinadas = [...palabraActual].every(letra => letrasAdivinadas.has(letra));
        if (todasLasLetrasAdivinadas) {
            mostrarMensaje('¡Felicitaciones! ¡Has ganado un descuento!', 'success');
            juegoTerminado = true;
        }

        actualizarPalabraVisible();
        actualizarTeclado();
    }

    function mostrarMensaje(texto, tipo) {
        const messageDiv = document.getElementById('mensaje'); // Cambié de 'message' a 'mensaje'
        messageDiv.textContent = texto;
        messageDiv.className = `mensaje ${tipo}`; // Cambié de 'message' a 'mensaje'
    }

    document.getElementById('nuevoJuegoBtn').onclick = iniciarJuego; // Cambié de 'newGameBtn' a 'nuevoJuegoBtn'
    document.getElementById('MostrarSugerenciaBtn').onclick = () => { // Cambié de 'showHintBtn' a 'MostrarSugerenciaBtn'
        const hintDiv = document.getElementById('pista'); // Cambié de 'hint' a 'pista'
        hintDiv.textContent = pistaActual;
        hintDiv.style.display = 'block';
    };

    crearTeclado();
    iniciarJuego();
});
