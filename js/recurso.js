document.addEventListener('DOMContentLoaded', () => {
    // Mostrar mensaje cuando se envíe el formulario
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir envío del formulario para demostración
        alert('Formulario enviado correctamente');
    });
});
