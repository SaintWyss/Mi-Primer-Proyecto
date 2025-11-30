/**
 * Módulo: App (Main Entry Point)
 * Responsabilidad: Inicializar la aplicación y coordinar los módulos.
 * Colaboradores: Navbar, Projects, Utils.
 */

import '../css/style.css';
import { initNavbar } from './modules/navbar.js';
import { initProjects } from './modules/projects.js';
import { showAlert } from './modules/utils.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log("Iniciando aplicación...");
  
  initNavbar();
  initProjects();

  // Vinculación de eventos globales
  // Reemplaza el onclick="showAlert()" en el HTML para mantener JS separado del HTML
  const alertBtn = document.querySelector('button[aria-label="Haz clic en mí"]');
  if (alertBtn) {
    alertBtn.addEventListener('click', showAlert);
  }
});
