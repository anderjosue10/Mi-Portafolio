// certificates.js - Funcionalidad específica para la página de certificados

// Navegación para la página de certificados
document.querySelectorAll('#home-btn, #projects-btn, #microsoft-btn').forEach(button => {
    button.addEventListener('click', function() {
        let targetUrl;

        switch(this.id) {
            case 'home-btn':
                targetUrl = 'index.html';
                break;
            case 'projects-btn':
                targetUrl = 'projects.html';
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

// Animaciones específicas para certificados
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Animaciones para las tarjetas de certificados
    gsap.from('.certificate-card', {
        scrollTrigger: {
            trigger: '.certificates-grid',
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

    // Efectos hover para tarjetas de certificados
    const certificateCards = document.querySelectorAll('.certificate-card');
    certificateCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}
