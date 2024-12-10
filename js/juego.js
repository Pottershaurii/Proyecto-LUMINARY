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

    // Descuentos Array
    const descuentos = [
        'Felicitaciones! Has ganado un descuento del 18% 🎉',
        '¡Bien hecho! Disfruta de un 20% de descuento en tu próxima compra! 🎉',
        '¡Genial! Obtienes un 15% de descuento en toda la tienda! 🎉',
        '¡Felicidades! Tienes un descuento del 25% para tu próxima compra! 🎉',
        '¡Increíble! Has ganado un 10% de descuento. ¡Aprovéchalo! 🎉'
    ];

    // Función para guardar jugador en el ranking
    function savePlayerToLeaderboard(ganaste) {
        // Obtener nombre de usuario desde localStorage
        const playerName = localStorage.getItem('gameUsername') || 'Jugador Anónimo';

        // Si ganó el juego, registrarlo en el ranking
        if (ganaste) {
            // Obtener ranking existente o crear nuevo
            let leaderboard = JSON.parse(localStorage.getItem('hangmanLeaderboard')) || [];
            
            // Agregar nueva entrada de jugador
            leaderboard.push({
                name: playerName,
                word: palabraActual,
                date: new Date().toLocaleString()
            });

            // Ordenar ranking por más reciente
            leaderboard.sort((a, b) => new Date(b.date) - new Date(a.date));

            // Limitar ranking a las 10 últimas entradas
            leaderboard = leaderboard.slice(0, 10);

            // Guardar de vuelta en localStorage
            localStorage.setItem('hangmanLeaderboard', JSON.stringify(leaderboard));
        }
    }

    // Función para mostrar ranking
    function displayLeaderboard() {
        const leaderboard = JSON.parse(localStorage.getItem('hangmanLeaderboard')) || [];
        const leaderboardHTML = leaderboard.map((entry, index) => 
            `<tr>
                <td>${index + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.word}</td>
                <td>${entry.date}</td>
            </tr>`
        ).join('');

        const leaderboardContainer = document.getElementById('leaderboard');
        if (leaderboardContainer) {
            leaderboardContainer.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Palabra</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>${leaderboardHTML}</tbody>
                </table>
            `;
        }
    }

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
        // Guardar en ranking antes de mostrar el resultado
        savePlayerToLeaderboard(ganaste);

        if (ganaste) {
            const descuentoAleatorio = descuentos[Math.floor(Math.random() * descuentos.length)];
            mensajeResultado.textContent = descuentoAleatorio;
        } else {
            mensajeResultado.textContent = `¡Perdiste! La palabra era: ${palabraActual}`;
        }

        resultado.style.display = 'block';
        
        // Actualizar tabla de clasificación
        displayLeaderboard();
    }

    // Botón reiniciar
    reiniciarJuegoBtn.addEventListener('click', () => {
        iniciarJuego();
        resultado.style.display = 'none';
    });

    // Mostrar pista
    document.getElementById('MostrarSugerenciaBtn').onclick = () => {
        const hintDiv = document.getElementById('pista');
        hintDiv.textContent = pistaActual;
        hintDiv.style.display = 'block';
    };

    // Instrucciones del juego
    function mostrarInstrucciones() {
        alert("Instrucciones:\n1. Adivina la palabra seleccionando letras.\n2. Cada error reduce tus intentos.\n3. ¡Evita que el ahorcado se complete!\n4. Gana un descuento al adivinar correctamente.");
    }

    // Botón nuevo juego
    document.getElementById('nuevoJuegoBtn').onclick = iniciarJuego;

    // Botón de instrucciones
    const botonInstrucciones = document.createElement('button');
    botonInstrucciones.textContent = "¿Cómo Jugar?";
    botonInstrucciones.className = "boton-instrucciones";
    botonInstrucciones.onclick = mostrarInstrucciones;
    document.querySelector('.contenedordeVerdugo').appendChild(botonInstrucciones);

    // Inicialización
    crearTeclado();
    iniciarJuego();
    displayLeaderboard();
});