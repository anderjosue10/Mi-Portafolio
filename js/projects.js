// projects.js - Funcionalidad específica para la página de proyectos

// Navegación para la página de proyectos
document.querySelectorAll('#home-btn, #certificates-btn, #microsoft-btn').forEach(button => {
    button.addEventListener('click', function() {
        let targetUrl;

        switch(this.id) {
            case 'home-btn':
                targetUrl = 'index.html';
                break;
            case 'certificates-btn':
                targetUrl = 'certificates.html';
                break;
            case 'microsoft-btn':
                targetUrl = 'microsoft.html';
                break;
        }

        if (targetUrl) {
            window.location.href = targetUrl;
        }
    });
});

// Animaciones específicas para proyectos
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Animaciones para las tarjetas de proyectos
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
    });

    // Efectos hover para tarjetas de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// --- Reproductor de video en modal (YouTube embed) ---
const videoModal = document.getElementById('videoModal');
const videoIframe = document.getElementById('videoModalIframe');
const videoCloseBtn = document.querySelector('.video-modal-close');

function openVideoModal(videoId, playlist) {
    if (!videoId || videoId.indexOf('VIDEO_ID') === 0) {
        // Si aún no se ha configurado el ID, avisar al autor
        alert('ID de vídeo no configurado. Reemplaza el valor placeholder por el ID real de YouTube.');
        return;
    }

    // Si se recibe un playlist explícito, lo añadimos para mantener el contexto de la lista
    const listParam = playlist ? `&list=${encodeURIComponent(playlist)}` : '';
    const src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&modestbranding=1${listParam}`;
    videoIframe.src = src;
    videoModal.setAttribute('aria-hidden', 'false');
}

function closeVideoModal() {
    videoModal.setAttribute('aria-hidden', 'true');
    // detener el video limpiando el src
    videoIframe.src = '';
}

// Abrir modal cuando se haga click en enlaces con la clase .play-video
document.querySelectorAll('.play-video').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const vid = btn.dataset.videoId;
        const playlist = btn.dataset.playlist; // opcional
        openVideoModal(vid, playlist);
    });
});

// cerrar desde el botón
if (videoCloseBtn) videoCloseBtn.addEventListener('click', closeVideoModal);

// cerrar al hacer click fuera del contenido
document.querySelectorAll('#videoModal, #videoModal .video-modal-backdrop').forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.target === el) closeVideoModal();
    });
});

// cerrar con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideoModal();
});
