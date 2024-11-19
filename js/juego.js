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

    const canvas = document.getElementById('verdugo');
    const ctx = canvas.getContext('2d');
    const resultado = document.getElementById('resultado');
    const mensajeResultado = document.getElementById('mensajeResultado');
    const reiniciarJuegoBtn = document.getElementById('reiniciarJuegoBtn');

    // Dibujar ahorcado
    function dibujarAhorcado(intentos) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(50, 200); ctx.lineTo(150, 200); // Base
        ctx.moveTo(100, 200); ctx.lineTo(100, 50); // Poste
        ctx.lineTo(150, 50); ctx.lineTo(150, 70); // Cuerda
        ctx.stroke();

        if (intentos < 6) { ctx.beginPath(); ctx.arc(150, 90, 20, 0, Math.PI * 2); ctx.stroke(); } // Cabeza
        if (intentos < 5) { ctx.moveTo(150, 110); ctx.lineTo(150, 150); ctx.stroke(); } // Cuerpo
        if (intentos < 4) { ctx.moveTo(150, 120); ctx.lineTo(120, 140); ctx.stroke(); } // Brazo izquierdo
        if (intentos < 3) { ctx.moveTo(150, 120); ctx.lineTo(180, 140); ctx.stroke(); } // Brazo derecho
        if (intentos < 2) { ctx.moveTo(150, 150); ctx.lineTo(120, 180); ctx.stroke(); } // Pierna izquierda
        if (intentos < 1) { ctx.moveTo(150, 150); ctx.lineTo(180, 180); ctx.stroke(); } // Pierna derecha
    }

    // Iniciar juego
    function iniciarJuego() {
        const indiceAleatorio = Math.floor(Math.random() * palabrasYPistas.length);
        palabraActual = palabrasYPistas[indiceAleatorio].palabra;
        pistaActual = palabrasYPistas[indiceAleatorio].pista;
        letrasAdivinadas = new Set();
        intentosRestantes = 6;
        juegoTerminado = false;

        document.getElementById('intentos').textContent = intentosRestantes;
        document.getElementById('pista').style.display = 'none';
        resultado.style.display = 'none';

        actualizarPalabraVisible();
        actualizarTeclado();
        dibujarAhorcado(6);
    }

    // Actualizar palabra visible
    function actualizarPalabraVisible() {
        const contenedor = document.getElementById('contenedordeOrdenes');
        contenedor.innerHTML = '';
        [...palabraActual].forEach(letra => {
            const span = document.createElement('span');
            span.className = 'espacioentreletras';
            span.textContent = letrasAdivinadas.has(letra) ? letra : '';
            contenedor.appendChild(span);
        });
    }

    // Crear teclado
    function crearTeclado() {
        const teclado = document.getElementById('teclado');
        teclado.innerHTML = ''; // Limpiar teclado al reiniciar
        'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('').forEach(letra => {
            const boton = document.createElement('button');
            boton.textContent = letra;
            boton.onclick = () => verificarLetra(letra);
            teclado.appendChild(boton);
        });
    }

    // Actualizar teclado
    function actualizarTeclado() {
        const botones = document.getElementById('teclado').getElementsByTagName('button');
        [...botones].forEach(boton => {
            boton.disabled = letrasAdivinadas.has(boton.textContent) || juegoTerminado;
        });
    }

    // Verificar letra
    function verificarLetra(letra) {
        if (juegoTerminado || letrasAdivinadas.has(letra)) return;

        letrasAdivinadas.add(letra);
        if (!palabraActual.includes(letra)) {
            intentosRestantes--;
            document.getElementById('intentos').textContent = intentosRestantes;
            dibujarAhorcado(intentosRestantes);

            if (intentosRestantes === 0) {
                mostrarResultado(false);
                juegoTerminado = true;
            }
        }

        if ([...palabraActual].every(letra => letrasAdivinadas.has(letra))) {
            mostrarResultado(true);
            juegoTerminado = true;
        }

        actualizarPalabraVisible();
        actualizarTeclado();
    }

    // Mostrar resultado
    function mostrarResultado(ganaste) {
        mensajeResultado.textContent = ganaste ? '¡Ganaste! 🎉' : `¡Perdiste! La palabra era: ${palabraActual}`;
        resultado.style.display = 'block';
    }

    // Botón reiniciar
    reiniciarJuegoBtn.addEventListener('click', iniciarJuego);

    // Mostrar pista
    document.getElementById('MostrarSugerenciaBtn').onclick = () => {
        const hintDiv = document.getElementById('pista');
        hintDiv.textContent = pistaActual;
        hintDiv.style.display = 'block';
    };

    crearTeclado();
    iniciarJuego();
});
