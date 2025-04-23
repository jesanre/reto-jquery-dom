$(document).ready(function() {
    // 1. Seleccionar todos los párrafos
    $("p").css("color", "blue");

    // 2. Añadir borde a los divs
    $("div").css("border", "2px solid green");

    // 3. Cambiar texto de los párrafos con clase especial
    $(".especial").text("Este texto ha sido cambiado con jQuery");

    // 4. Al hacer clic en el botón, eliminar un elemento
    $("#eliminar").click(function() {
        $(".borrar").remove();
    });

    // 5. Evitar que el formulario recargue la página y mostrar un mensaje
    $("#formulario").submit(function(e) {
        e.preventDefault();
        alert("Formulario enviado (simulado)!");
    });
});