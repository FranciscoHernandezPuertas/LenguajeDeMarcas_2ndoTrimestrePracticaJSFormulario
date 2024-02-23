// Modificación Contenido
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

document.addEventListener("DOMContentLoaded", function () {

    // Función que se ejecutará al hacer clic en el checkbox "muestra encabezado de la página"
    function muestraOcultaEncabezado() {
        // Obtener el estado del checkbox
        var mostrarEncabezado = document.forms["formularioCambio"]["checkbox1"].checked;

        // Obtener el elemento del encabezado
        var encabezado = document.getElementById("encabezado1");

        // Mostrar u ocultar el encabezado según el estado del checkbox
        encabezado.style.display = mostrarEncabezado ? "block" : "none";
    }

    // Asignar la función al evento click del checkbox "muestra encabezado de la página"
    var checkboxEncabezado = document.forms["formularioCambio"]["checkbox1"];
    checkboxEncabezado.addEventListener("click", muestraOcultaEncabezado);

    // Llamar a la función inicialmente para reflejar el estado inicial del checkbox
    muestraOcultaEncabezado();
});

document.addEventListener("DOMContentLoaded", function () {

    // Función que se ejecutará al hacer clic en los checkboxes
    function muestraOculta() {
        // Obtener el estado de los checkboxes
        var mostrarParrafo = document.forms["formularioCambio"]["checkbox2"].checked;

        // Obtener todos los párrafos con la clase "nuevo"
        var parrafosNuevos = document.querySelectorAll(".nuevo");

        // Mostrar u ocultar los párrafos añadidos
        parrafosNuevos.forEach(function(parrafo){
            parrafo.style.display = mostrarParrafo ? "block" : "none";
        });
    }

    // Asignar la función al evento click del checkbox para los párrafos añadidos
    var checkboxParrafo = document.forms["formularioCambio"]["checkbox2"];
    checkboxParrafo.addEventListener("click", muestraOculta);

    // Llamar a la función inicialmente para reflejar el estado inicial del checkbox
    muestraOculta();
});

// Control Contenido
document.addEventListener("DOMContentLoaded", function () {

    // Asignar la función a los eventos input de los campos de contraseña
    document.getElementById("pass1").addEventListener("input", quitarEstiloIncorrecto);
    document.getElementById("pass2").addEventListener("input", quitarEstiloIncorrecto);

    // Asignar la función al evento input del campo de NIF
    document.getElementById("dni").addEventListener("input", quitarEstiloIncorrecto);

    // Función para quitar las clases incorrecto y correcto
    function quitarEstiloIncorrecto() {
        this.classList.remove("incorrecto", "correcto"); // "this" se refiere al elemento que desencadenó el evento
    }

    // Función que se ejecutará al hacer clic en el botón "Enviar consulta"
    function enviarConsulta() {
        // Evitar el comportamiento por defecto del formulario
        event.preventDefault();

        // Obtener los valores de las contraseñas
        var password1 = document.getElementById("pass1").value;
        var password2 = document.getElementById("pass2").value;

        // Obtener el valor del NIF
        var nifValue = document.getElementById("dni").value;

        // Comprobar si uno o ambos campos de contraseñas están vacíos
        if (password1 === "" || password2 === "") {
            alert("Por favor, completa ambos campos de contraseñas");
            return;
        }

        // Comprobar si el campo de NIF está vacío
        if (nifValue === "") {
            alert("Por favor, completa el campo del NIF");
            return;
        }

        // Realizar comprobaciones de contraseñas
        if (password1 === password2) {
            // Contraseñas correctas
            alert("Contraseñas comprobadas correctamente");
            // Marcar ambos inputs con el estilo correcto
            document.getElementById("pass1").classList.add("correcto");
            document.getElementById("pass2").classList.add("correcto");
        } else {
            // Contraseñas incorrectas
            alert("Error en la comprobación de contraseñas");
            // Asignar a ambos inputs los estilos de la clase incorrecto
            document.getElementById("pass1").classList.add("incorrecto");
            document.getElementById("pass2").classList.add("incorrecto");
        }

        // Realizar comprobaciones de NIF
        if (validarNIF(nifValue)) {
            // NIF correcto
            alert("NIF comprobado correctamente");
            // Aplicar la clase correcto al input del NIF
            document.getElementById("dni").classList.add("correcto");
        } else {
            // NIF incorrecto
            alert("Error en la comprobación del NIF");
            // Aplicar la clase incorrecto al input del NIF
            document.getElementById("dni").classList.add("incorrecto");
        }

        // Controlar el foco en los campos después de la comprobación
        document.getElementById("pass1").focus();
        document.getElementById("dni").focus();
    }

    // Asignar la función al evento click del botón "Enviar consulta"
    var botonEnviar = document.querySelector("input[type='submit']");
    botonEnviar.addEventListener("click", enviarConsulta);

    // Función para validar el NIF español
    function validarNIF(nif) {
        // Comprobar que el formato del NIF es correcto
        var formatoCorrecto = /^[0-9]{8}[A-Za-z]$/.test(nif);
        if (!formatoCorrecto) {
            return false; // El formato no es correcto
        }

        // Extraer el número y la letra del NIF
        var numero = parseInt(nif.slice(0, 8), 10);
        var letra = nif.charAt(8).toUpperCase();

        // Calcular la letra esperada
        var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        var letraEsperada = letras.charAt(numero % 23);

        // Comparar la letra esperada con la letra del NIF
        return letra === letraEsperada;
    }

});

// Array para almacenar los nombres
var nombresArray = []; // El array se declara aquí para poder acceder desde cualquier método
// Añadir contenido
document.addEventListener("DOMContentLoaded", function () {

    // Función que se ejecutará al hacer clic en el botón "agregar"
    function agregarNombre() {
        // Obtener el valor del primer input
        var nuevoNombre = document.forms["formularioCambio"]["nombreNuevo"].value;

        // Agregar el nuevo nombre al array
        nombresArray.push(nuevoNombre);

        // Ordenar el array alfabéticamente
        nombresArray.sort();

        // Actualizar el contenido del textarea con los nombres ordenados
        document.forms["formularioCambio"]["ordenados"].value = nombresArray.join('\n');
    }

    // Asignar la función al evento click del botón "agregar"
    var botonAgregar = document.querySelector("input[name='agregarNombre']");
    botonAgregar.addEventListener("click", agregarNombre);
});


// Botón de restablecer
document.addEventListener("DOMContentLoaded", function () {
    // ...

    // Asignar la función al evento click del botón de reestablecer
    var botonReestablecer = document.querySelector("input[type='reset']");
    botonReestablecer.addEventListener("click", reestablecerContenido);

    // Función para reestablecer el contenido
    function reestablecerContenido() {
        // 1. Reestablecer el encabezado de la página a su valor original
        document.getElementById("encabezado1").innerText = "Crea tu propio contenido";

        // Mostrar el encabezado (en caso de que esté oculto)
        document.getElementById("encabezado1").style.display = "block";

        // 2. Eliminar solo el texto personalizado añadido
        var contenedor = document.querySelector("main section");
        var parrafos = contenedor.querySelectorAll(".nuevo");
        parrafos.forEach(function(parrafo) {
            contenedor.removeChild(parrafo);
        });

        // 3. Reestablecer las clases de los campos de contraseña y dni
        document.getElementById("pass1").classList.remove("correcto", "incorrecto");
        document.getElementById("pass2").classList.remove("correcto", "incorrecto");
        document.getElementById("dni").classList.remove("correcto", "incorrecto");

        // 4. Eliminar el array de nombres ordenados y limpiar el textarea
        nombresArray = [];
        document.forms["formularioCambio"]["ordenados"].value = "Los nombres ordenados aparecerán aquí.";
    }
});
