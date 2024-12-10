document.addEventListener('DOMContentLoaded', function() {
    const miniGameLink = document.querySelector('a[href="parciales/juego.html"]');
    
    miniGameLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir la navegación directa
        
        // Solicitar nombre de usuario
        const username = prompt('Por favor, ingresa tu nombre de usuario para jugar:');
        
        if (username && username.trim() !== '') {
            // Guardar nombre de usuario en localStorage
            localStorage.setItem('gameUsername', username.trim());
            
            // Redirigir al minijuego
            window.location.href = 'parciales/juego.html';
        } else {
            alert('Debes ingresar un nombre de usuario válido.');
        }
    });
});