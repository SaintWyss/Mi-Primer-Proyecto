const menus = document.querySelectorAll('.menu1, .menu2, .menu3, .menu4');

menus.forEach(menu => {
  menu.addEventListener('mouseover', () => {
    menu.style.backgroundColor = menu.style.backgroundColor.replace('0.5', '1');
  });

  menu.addEventListener('mouseout', () => {
    menu.style.backgroundColor = menu.style.backgroundColor.replace('1', '0.5');
  });
});


function showAlert() {//funcion boton
  alert("¡Hola, esta es una alerta desde JavaScript!");
}

// Eliminamos el código relacionado con el formulario ya que se ha eliminado del HTML

document.querySelector("button.button-menu-toggle").addEventListener("click", function() {
  document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
});
