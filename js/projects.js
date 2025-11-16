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
