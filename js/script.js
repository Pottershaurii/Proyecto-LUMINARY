document.addEventListener('DOMContentLoaded', () => {
    // Menú desplegable para Recursos
    const recursosToggle = document.getElementById('recursos-toggle');
    const submenu = document.getElementById('submenu');

    recursosToggle.addEventListener('click', function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'; // Alterna la visibilidad del menú
    });
    // Menú desplegable para Plataforma
    const plataformaToggle = document.getElementById('plataforma-toggle');
    const subplataforma = document.getElementById('subplataforma');

    plataformaToggle.addEventListener('click', function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        subplataforma.style.display = subplataforma.style.display === 'block' ? 'none' : 'block'; // Alterna la visibilidad del menú
    });


    // Rotación de palabras
    const headings = document.querySelectorAll('.rotating-words h3');
    let currentIndex = 0;

    const rotateWords = () => {
        headings[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % headings.length;
        headings[currentIndex].classList.add('visible');
        setTimeout(rotateWords, 2000); // Cambia cada 2 segundos
    };

    headings[currentIndex].classList.add('visible'); // Muestra el primer encabezado
    setTimeout(rotateWords, 2000); // Inicia la rotación
});