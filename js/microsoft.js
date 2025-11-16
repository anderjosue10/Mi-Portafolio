// microsoft.js - Funcionalidad específica para la página de logros Microsoft

// Navegación para la página de Microsoft
document.querySelectorAll('#home-btn, #projects-btn, #certificates-btn').forEach(button => {
    button.addEventListener('click', function() {
        let targetUrl;

        switch(this.id) {
            case 'home-btn':
                targetUrl = 'index.html';
                break;
            case 'projects-btn':
                targetUrl = 'projects.html';
                break;
            case 'certificates-btn':
                targetUrl = 'certificates.html';
                break;
        }

        if (targetUrl) {
            window.location.href = targetUrl;
        }
    });
});

// Animaciones específicas para logros Microsoft
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Animaciones para las tarjetas de logros
    gsap.from('.achievement-card', {
        scrollTrigger: {
            trigger: '.achievements-grid',
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

    // Efectos hover para tarjetas de logros
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                rotation: 2,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}
