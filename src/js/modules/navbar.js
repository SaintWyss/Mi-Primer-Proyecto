/**
 * Módulo: Navbar
 * Responsabilidad: Manejar la interactividad de la barra de navegación (menú responsive).
 * Colaboradores: DOM (document).
 */

export function initNavbar() {
  const toggleButton = document.querySelector(".button-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", function() {
      // En Tailwind, "hidden" oculta el elemento. "flex" lo muestra.
      // Alternamos la clase 'hidden' y 'flex' para mostrar/ocultar en móvil.
      // Pero como usamos una clase personalizada en el CSS anterior para la animación,
      // vamos a adaptar la lógica a Tailwind puro o mantener la clase si es necesario.
      
      // Estrategia Tailwind:
      // El menú está oculto por defecto en móvil (hidden) y visible en md (md:flex).
      // Al hacer click, queremos quitar 'hidden' y poner 'flex' y 'flex-col'.
      
      navLinks.classList.toggle("hidden");
      navLinks.classList.toggle("flex");
      navLinks.classList.toggle("flex-col");
      navLinks.classList.toggle("absolute");
      navLinks.classList.toggle("top-16");
      navLinks.classList.toggle("left-0");
      navLinks.classList.toggle("w-full");
      navLinks.classList.toggle("bg-slate-900");
      navLinks.classList.toggle("p-6");
      navLinks.classList.toggle("border-b");
      navLinks.classList.toggle("border-white/10");
    });
  }
}
