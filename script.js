const elementos = document.querySelectorAll('.animar');

function mostrar() {
    const trigger = window.innerHeight * 0.85;

    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', mostrar);
window.addEventListener('load', mostrar);

/* LIGHTBOX */
function abrirLightbox(src) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = src;
}

function cerrarLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
