// ID DE CÓDIGO EN CHAT GPT: DrOlanoWeb-PrototypeFromWireframe-v2-script

document.addEventListener('DOMContentLoaded', () => {
  // 1. Animar secciones al hacer scroll
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  sections.forEach(sec => observer.observe(sec));

  // 2. Manejar el formulario de cotización
  const cotizaForm = document.querySelector('.cotiza-content form');
  if (cotizaForm) {
    cotizaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Gracias! Hemos recibido tu solicitud de cotización y te contactaremos pronto.');
      cotizaForm.reset();
    });
  }

  // 3. “Pide tu cita” en Hero → scroll al formulario
  const heroBtn = document.querySelector('#hero .btn-primary');
  if (heroBtn && cotizaForm) {
    heroBtn.addEventListener('click', (e) => {
      e.preventDefault();
      cotizaForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // opcional: enfocar el primer campo
      const firstField = cotizaForm.querySelector('input, textarea');
      if (firstField) firstField.focus();
    });
  }
});

    // ANIMACIÓN PARA MENÚ HAMBURGUESA

    document.addEventListener("DOMContentLoaded", () => {
      const btnHamburguesa = document.getElementById("btnHamburguesa");
      const menuLateral = document.getElementById("menuLateral");
      const overlay = document.getElementById("overlay");
    
      btnHamburguesa.addEventListener("click", () => {
        menuLateral.classList.add("activo");
        overlay.classList.add("activo");
        btnHamburguesa.classList.add("oculto");
      });
    
      overlay.addEventListener("click", () => {
        menuLateral.classList.remove("activo");
        overlay.classList.remove("activo");
        btnHamburguesa.classList.remove("oculto");
      });
    
      // Opcional: cerrar menú si se hace clic en un enlace del menú
      document.querySelectorAll("#menuLateral a").forEach(link => {
        link.addEventListener("click", () => {
          menuLateral.classList.remove("activo");
          overlay.classList.remove("activo");
          btnHamburguesa.classList.remove("oculto");
        });
      });
    });
    
    // ---------------PREGUNTAS FRECUENTES-------------
      document.addEventListener("DOMContentLoaded", () => {
        const questions = document.querySelectorAll(".faq-question");

        questions.forEach(btn => {
          btn.addEventListener("click", () => {
            const isExpanded = btn.getAttribute("aria-expanded") === "true";
            const answer = btn.nextElementSibling;

            // Primero: cerrar todos los items activos
            questions.forEach(otherBtn => {
              otherBtn.setAttribute("aria-expanded", "false");
              otherBtn.nextElementSibling.style.maxHeight = null;
            });

            // Si el botón actual estaba cerrado, lo abrimos (porque ya fue cerrado arriba)
            if (!isExpanded) {
              btn.setAttribute("aria-expanded", "true");
              answer.style.maxHeight = answer.scrollHeight + "px";
            }
          });
        });
      });

