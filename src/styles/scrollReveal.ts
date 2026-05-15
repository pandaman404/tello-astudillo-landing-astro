/**
 * Scroll-reveal animation system using IntersectionObserver.
 * Adds `.visible` to elements with `.scroll-reveal` when they enter the viewport.
 * Respects `prefers-reduced-motion`.
 */
function initScrollReveal(): void {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");

  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScrollReveal);
} else {
  initScrollReveal();
}
