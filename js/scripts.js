document.addEventListener("DOMContentLoaded", function() {
  // Selecciona todas las pestañas
  var tabs = document.querySelectorAll(".nav-tabs .nav-item .nav-link");

  tabs.forEach(function(tab) {
    tab.addEventListener("click", function(e) {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

        // Remueve la clase 'active' de todas las pestañas
        tabs.forEach(function(t) {
        t.classList.remove("active");
        });

        // Agrega la clase 'active' a la pestaña clickeada
        this.classList.add("active");

        // Obtiene el valor del atributo 'data-target'
        var targetId = this.getAttribute("data-target");

        // Oculta todos los contenedores de contenido
        var contents = document.querySelectorAll(".card-body > div");
        contents.forEach(function(content) {
            content.classList.add("d-none");
        });

        // Muestra el contenedor de contenido que coincide con el 'data-target'
        var targetContent = document.querySelector(targetId);
        if (targetContent) {
            targetContent.classList.remove("d-none");
        }
    });
  });
});