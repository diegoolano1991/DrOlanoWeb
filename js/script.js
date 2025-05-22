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
