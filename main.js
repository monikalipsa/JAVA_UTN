

function registrarse() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const tipoContacto = document.getElementById("tipoContacto").value;
    const asunto = document.getElementById("asunto").value;
    const descripcion = document.getElementById("descripcion").value;

    // Validar campos obligatorios
    if (nombre === '' || apellido === '' || email === '' || asunto === '' || descripcion === '') {
        document.getElementById('error_nombre').innerHTML = 'El campo es obligatorio';
        document.getElementById('error_apellido').innerHTML = 'El campo es obligatorio';
        document.getElementById('error_email').innerHTML = 'El campo es obligatorio';
        document.getElementById('error_asunto').innerHTML = 'El campo es obligatorio';
        document.getElementById('error_descripcion').innerHTML = 'El campo es obligatorio';
    } else {
        // Limpiar mensajes de error
        document.getElementById('error_nombre').innerHTML = '';
        document.getElementById('error_apellido').innerHTML = '';
        document.getElementById('error_email').innerHTML = '';
        document.getElementById('error_asunto').innerHTML = '';
        document.getElementById('error_descripcion').innerHTML = '';

        // Llamar a getMensaje() solo si el formulario está completo
        getMensaje();
    }
}

//----------------------------ajax, mensaje------------------------------
const getMensaje = () => {
    const http = new XMLHttpRequest();
    http.onreadystatechange = () => {
        console.log("onreadystatechange");
        console.log(http.readyState);
        console.log(http.status);

        if (http.readyState == 4 && http.status == 200) {
            document.getElementById("mensaje").innerHTML = http.responseText;
        }
    };

    http.open('GET', 'http://localhost/backav/js_ajax/gracias.txt', true);
    http.send();
}
