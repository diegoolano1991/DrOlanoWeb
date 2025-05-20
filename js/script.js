document.addEventListener("DOMContentLoaded", () => {
  // Animación de secciones al hacer scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".section").forEach((sec) => observer.observe(sec));
});
