document.addEventListener('DOMContentLoaded', function() {

    // Menú Móvil (Hamburguesa)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links li a');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                menuToggle.setAttribute('aria-label', 'Cerrar menú');
                menuToggle.setAttribute('aria-expanded', 'true');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                menuToggle.setAttribute('aria-label', 'Abrir menú');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    menuToggle.setAttribute('aria-label', 'Abrir menú');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // Año actual en el footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Animaciones al hacer scroll (Fade-in)
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Elemento visible al 10%
    };

    const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        intersectionObserver.observe(el);
    });

    // Validación y envío simulado del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();

            formMessage.textContent = ''; // Limpiar mensajes previos
            formMessage.className = '';   // Limpiar clases previas

            if (!name || !email || !phone) {
                formMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
                formMessage.classList.add('error');
                return;
            }

            // Simulación de envío exitoso
            // En un caso real, aquí harías una petición fetch a tu backend
            setTimeout(() => {
                formMessage.textContent = '¡Gracias! Tu solicitud de cita ha sido enviada. Te contactaremos pronto.';
                formMessage.classList.add('success');
                contactForm.reset();

                setTimeout(() => {
                    formMessage.textContent = '';
                    formMessage.className = '';
                }, 7000); // Limpiar mensaje después de 7 segundos
            }, 1000); // Simular demora de red
        });
    }

    // Sticky header (cambia estilos al hacer scroll)
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});