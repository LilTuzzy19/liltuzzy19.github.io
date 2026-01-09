/* ANIMACIONES */
const elementos = document.querySelectorAll('.animar');

function mostrar() {
    const trigger = window.innerHeight * 0.85;
    elementos.forEach(el => {
        if (el.getBoundingClientRect().top < trigger) {
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

/* SERVICIOS */
function abrirServicio(tipo) {
    const titulo = document.getElementById('titulo-servicio');
    const texto = document.getElementById('texto-servicio');

    const data = {
        maquinaria: ["Arriendo de Maquinaria", "Retroexcavadora, excavadora de 14 y 21 toneladas, operadores capacitados y equipos certificados."],
        aridos: ["Venta de Áridos", "Arena, ripio, grava y material seleccionado con despacho a obra."],
        montaje: ["Trabajos Especializados", "Montaje y desmontaje de galpones, camión pluma y estructuras."],
        transporte: ["Transporte", "Transporte por carretera con cumplimiento de normas de seguridad."],
        cama: ["Cama Baja", "Traslado de maquinaria pesada y equipos especiales."],
        personal: ["Atención Personalizada", "Asesoría directa según las necesidades de cada cliente."]
    };

    titulo.textContent = data[tipo][0];
    texto.textContent = data[tipo][1];
    document.getElementById('modal-servicio').style.display = 'flex';
}

function cerrarServicio() {
    document.getElementById('modal-servicio').style.display = 'none';
}
