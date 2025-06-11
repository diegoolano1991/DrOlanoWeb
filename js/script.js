// ID DE CÓDIGO EN CHAT GPT: DrOlanoWeb-PrototypeFromWireframe-v2-script

document.addEventListener("DOMContentLoaded", () => {
  // 1. Animar secciones al hacer scroll
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  sections.forEach((sec) => observer.observe(sec));

  // 1b. Encabezado animado con scroll y hover
  const header = document.querySelector('header');
  let lastScrollY = 0;
  let downDistance = 0;
  const HIDE_DISTANCE = 35; // desplazamiento antes de ocultar
  const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches;

  const updateHeader = () => {
    const current = window.scrollY;
    if (isDesktop()) {
      header.classList.toggle('shrink', current > 50);
      header.classList.remove('hide');
    } else {
      if (current > lastScrollY) {
        downDistance += current - lastScrollY;
        if (downDistance > HIDE_DISTANCE && current > 50) {
          header.classList.add('hide');
        }
      } else {
        downDistance = 0;
        header.classList.remove('hide');
      }
      header.classList.remove('shrink');
    }
    lastScrollY = current;
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader);
  window.addEventListener('resize', updateHeader);
  header.addEventListener('mouseenter', () => {
    if (isDesktop()) header.classList.remove('shrink');
  });
  header.addEventListener('mouseleave', () => {
    if (isDesktop() && window.scrollY > 50) header.classList.add('shrink');
  });
  header.addEventListener('touchstart', () => {
    if (isDesktop()) header.classList.remove('shrink');
  });
  header.addEventListener('touchend', () => {
    if (isDesktop() && window.scrollY > 50) header.classList.add('shrink');
  });


  // 2. Manejar el formulario de cotización
  const cotizaForm = document.querySelector(".cotiza-content form");
  if (cotizaForm) {
    const nombreField = document.getElementById("nombre-cot");
    const whatsappField = document.getElementById("whatsapp");
    const emailField = document.getElementById("email-cot");
    const consultaField = document.getElementById("consulta");

    cotizaForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // limpiar estados de error previos
      [nombreField, whatsappField, emailField, consultaField].forEach((f) => {
        f.classList.remove("input-error");
      });

      let valido = true;
      if (!nombreField.value.trim()) {
        nombreField.classList.add("input-error");
        valido = false;
      }
      if (!whatsappField.value.trim()) {
        whatsappField.classList.add("input-error");
        valido = false;
      }
      if (!emailField.value.trim()) {
        emailField.classList.add("input-error");
        valido = false;
      }
      if (!consultaField.value.trim()) {
        consultaField.classList.add("input-error");
        valido = false;
      }

      if (!valido) {
        alert("Por favor completa todos los campos requeridos.");
        return;
      }

      alert(
        "¡Gracias! Hemos recibido tu solicitud de cotización y te contactaremos pronto."
      );
      cotizaForm.reset();
    });
  }

  // 3. “Pide tu cita” en Hero → scroll al formulario
  const heroBtn = document.querySelector("#hero .btn-primary");
  if (heroBtn && cotizaForm) {
    heroBtn.addEventListener("click", (e) => {
      e.preventDefault();
      cotizaForm.scrollIntoView({ behavior: "smooth", block: "start" });
      // opcional: enfocar el primer campo
      const firstField = cotizaForm.querySelector("input, textarea");
      if (firstField) firstField.focus();
    });
  }

  // ANIMACIÓN PARA MENÚ HAMBURGUESA
      const btnHamburguesa = document.getElementById("btnHamburguesa");
      const menuLateral = document.getElementById("menuLateral");
      const overlay = document.getElementById("overlay");

      if (btnHamburguesa && menuLateral && overlay) {
        const cerrarMenu = () => {
          menuLateral.classList.remove("activo");
          overlay.classList.remove("activo");
          btnHamburguesa.classList.remove("oculto");
          updateHeader();
        };

    btnHamburguesa.addEventListener('click', () => {
      menuLateral.classList.add('activo');
      overlay.classList.add('activo');
      btnHamburguesa.classList.add('oculto');
      header.classList.remove('hide', 'shrink');
      downDistance = 0;
    });

        overlay.addEventListener("click", cerrarMenu);
        document.querySelectorAll("#menuLateral a").forEach((link) => {
          link.addEventListener("click", cerrarMenu);
        });
      }
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

