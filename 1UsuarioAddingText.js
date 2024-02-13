//Botón en Document>Body>Main>Form>1Fieldset>ul>2li
document.addEventListener("DOMContentLoaded", function () {
    // Función que se ejecutará al hacer clic en el botón "Cambia!"
    function cambiaTitulo() {
        // Obtener el valor del input
        var nuevoTitulo = document.forms["formularioCambio"]["EncabezadoNuevo"].value;

        // Cambiar el contenido del elemento h1 con el nuevo título
        document.getElementById("encabezado1").innerText = nuevoTitulo;
    }

    // Asignar la función al evento click del botón
    var botonCambia = document.querySelector("button[type='button']");
    botonCambia.addEventListener("click", cambiaTitulo);
});
