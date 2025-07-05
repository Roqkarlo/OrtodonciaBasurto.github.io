document.addEventListener('DOMContentLoaded', function() {

    // --- MENÚ MÓVIL (HAMBURGUESA) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Bloquea el scroll del body cuando el menú está activo
            document.body.classList.toggle('no-scroll', navLinks.classList.contains('active'));
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            });
        });
    }

    // --- ACTUALIZACIÓN DEL AÑO EN EL FOOTER ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
// Pega este código antes del último }); de tu archivo js/script.js

    // --- INICIO DE ADICIÓN: Lógica para Animaciones ---

    // 1. LÓGICA PARA ANIMACIONES AL HACER SCROLL
    const animatedElements = document.querySelectorAll('.fade-in-up');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // 2. ANIMACIÓN DE TRANSICIÓN DE PÁGINA (EXPLOSIÓN)
    const transitionLinks = document.querySelectorAll('.caso-card'); 

    transitionLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const destination = this.href;
            const body = document.body;

            if (document.querySelector('.page-transition-explosion')) {
                return;
            }

            const explosion = document.createElement('div');
            explosion.classList.add('page-transition-explosion');

            const clickX = event.clientX;
            const clickY = event.clientY;
            explosion.style.setProperty('--x', `${clickX}px`);
            explosion.style.setProperty('--y', `${clickY}px`);

            body.appendChild(explosion);

            setTimeout(() => {
                window.location.href = destination;
            }, 700); 
        });
    });

    // --- FIN DE ADICIÓN ---
});