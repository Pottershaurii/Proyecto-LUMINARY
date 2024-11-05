const music = document.getElementById('background-music');
const toggleButton = document.getElementById('toggle-music');

// Event listener to ensure the music is loaded
music.addEventListener('canplaythrough', () => {
    toggleButton.disabled = false; // Habilita el botón de reproducción
});

// Function to toggle music on and off
toggleButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        toggleButton.textContent = 'Música: On';
    } else {
        music.pause();
        toggleButton.textContent = 'Música: Off';
    }
});
