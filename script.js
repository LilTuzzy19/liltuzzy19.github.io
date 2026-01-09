const elementos = document.querySelectorAll('.animar');

const mostrar = () => {
    const trigger = window.innerHeight * 0.85;

    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', mostrar);
window.addEventListener('load', mostrar);
