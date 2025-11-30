/**
 * Módulo: Projects
 * Responsabilidad: Manejar la visualización de proyectos ocultos (funcionalidad "Ver más").
 * Colaboradores: DOM (document).
 */

export function initProjects() {
  const showMoreBtnJava = document.querySelector('.java .show-more-btn');
  const hiddenProjectsJava = document.querySelectorAll('.java .project-hidden');
  const showMoreBtnPython = document.querySelector('.python .show-more-btn');
  const hiddenProjectsPython = document.querySelectorAll('.python .project-hidden');

  if (showMoreBtnJava) {
    showMoreBtnJava.addEventListener('click', function () {
      toggleProjects(hiddenProjectsJava, showMoreBtnJava);
    });
  }

  if (showMoreBtnPython) {
    showMoreBtnPython.addEventListener('click', function () {
      toggleProjects(hiddenProjectsPython, showMoreBtnPython);
    });
  }
}

function toggleProjects(hiddenProjects, showMoreBtn) {
  if (hiddenProjects.length === 0) return;

  // En Tailwind usamos la clase 'hidden' para ocultar
  const firstProject = hiddenProjects[0];
  const isHidden = firstProject.classList.contains('hidden');

  if (!isHidden) {
    // Ocultar proyectos
    hiddenProjects.forEach((project) => {
      project.classList.add('hidden');
    });
    showMoreBtn.textContent = 'Ver más';
    // Restaurar estilos originales del botón (quitando estilos de "activo" si los hubiera)
    // En este caso, Tailwind maneja los colores por clases, no inline styles.
  } else {
    // Mostrar proyectos
    hiddenProjects.forEach((project) => {
      project.classList.remove('hidden');
    });
    showMoreBtn.textContent = 'Mostrar menos';
  }
}
