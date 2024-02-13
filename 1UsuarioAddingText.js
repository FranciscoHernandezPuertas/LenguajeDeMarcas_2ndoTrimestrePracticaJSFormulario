//Botón en Document>Body>Main>Form>1Fieldset>ul>2li
document.addEventListener("DOMContentLoaded", function () {
    // Función que se ejecutará al hacer clic en el botón "Cambia!"
    function cambiaTitulo() {
        // Obtener el valor del input
        let nuevoTitulo = document.forms["formularioCambio"]["EncabezadoNuevo"].value;

        // Cambiar el contenido del elemento h1 con el nuevo título
        document.getElementById("encabezado1").innerText = nuevoTitulo;
    }

    // Asignar la función al evento click del botón
    let botonCambia = document.querySelector("button[type='button']");
    botonCambia.addEventListener("click", cambiaTitulo);
});

document.addEventListener("DOMContentLoaded", function () {

    // Función que se ejecutará al hacer clic en el botón "Añadir"
    function añadirContenido() {
        // Obtener el valor del segundo input
        let nuevaFrase = document.forms["formularioCambio"]["frase"].value;

        // Crear un nuevo párrafo
        let nuevoParrafo = document.createElement("p");
        nuevoParrafo.className = "nuevo"; // Agregar la clase "nuevo" al nuevo párrafo
        let textoNuevo = document.createTextNode(nuevaFrase);
        nuevoParrafo.appendChild(textoNuevo);

        // Obtener el contenedor donde se agregarán los nuevos párrafos
        let contenedor = document.querySelector("main section");

        // Insertar el nuevo párrafo en la parte superior del contenedor
        contenedor.insertBefore(nuevoParrafo, contenedor.lastChild);

        // Limpiar el valor del input después de añadir el contenido
        document.forms["formularioCambio"]["frase"].value = "";
    }

    // Asignar la función al evento click del botón "Añadir"
    var botonAñadir = document.getElementById("botonFrase");
    botonAñadir.addEventListener("click", añadirContenido);
});