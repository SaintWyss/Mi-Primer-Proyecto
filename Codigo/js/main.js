function showAlert() {
  alert("¡Hola, esta es una alerta desde JavaScript!");
}

// Eliminamos el código relacionado con el formulario ya que se ha eliminado del HTML

document.querySelector("button.button-menu-toggle").addEventListener("click", function() {
  document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
});