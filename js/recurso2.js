function toggleContent(event) {
    event.preventDefault(); // Evitar que el enlace recargue la página
    const post = event.target.closest('.post');
    const extraContent = post.querySelector('.extra-content');
    const readMore = post.querySelector('.read-more');
    
    // Alternar visibilidad del contenido
    if (extraContent.classList.contains('visible')) {
        extraContent.classList.remove('visible');
        readMore.textContent = 'Leer más';
    } else {
        extraContent.classList.add('visible');
        readMore.textContent = 'Leer menos';
    }
}
