document.addEventListener('DOMContentLoaded', () => {
    // Menú desplegable para Recursos
    const recursosToggle = document.getElementById('recursos-toggle');
    const submenu = document.getElementById('submenu');

    recursosToggle.addEventListener('mouseenter', function () {
        submenu.style.display = 'block'; // Muestra el submenú al pasar el mouse
    });

    submenu.addEventListener('mouseleave', function () {
        submenu.style.display = 'none'; // Oculta el submenú cuando el mouse sale del submenú
    });

    // Menú desplegable para Plataforma
    const plataformaToggle = document.getElementById('plataforma-toggle');
    const subplataforma = document.getElementById('subplataforma');

    plataformaToggle.addEventListener('mouseenter', function () {
        subplataforma.style.display = 'block'; // Muestra el submenú al pasar el mouse
    });

    subplataforma.addEventListener('mouseleave', function () {
        subplataforma.style.display = 'none'; // Oculta el submenú cuando el mouse sale del submenú
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
