function registrarse() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const tipoContacto = document.getElementById("tipoContacto").value;
    const asunto = document.getElementById("asunto").value;
    const descripcion = document.getElementById("descripcion").value;

    // Verificar si todos los campos obligatorios están completos
    if (nombre === '' || apellido === '' || email === '' || asunto === '' || descripcion === '') {
        // Mostrar mensajes de error para campos obligatorios no completados
        document.getElementById('error_nombre').innerHTML = 'El campo es obligatorio';
        document.getElementById('error_apellido').innerHTML = 'El campo es obligatorio';
        document.getElementById('error_email').innerHTML = 'El campo es obligatorio';
        document.getElementById('error_asunto').innerHTML = 'El campo es obligatorio';
        document.getElementById('error_descripcion').innerHTML = 'El campo es obligatorio';
    } else {
        // Limpiar mensajes de error si el formulario está completo
        document.getElementById('error_nombre').innerHTML = '';
        document.getElementById('error_apellido').innerHTML = '';
        document.getElementById('error_email').innerHTML = '';
        document.getElementById('error_asunto').innerHTML = '';
        document.getElementById('error_descripcion').innerHTML = '';

        // Llamar a la función getMensaje solo si el formulario está completo
        getMensaje();
    }
}

// Función para validar los campos
function validar(elemento) {
    const value = elemento.value.trim(); 
    const name = elemento.name.trim(); 
  
    if (value === '') {
        document.getElementById('error_' + name).innerHTML = 'El campo es obligatorio';
    } else {
        document.getElementById('error_' + name).innerHTML = ''; 
    }
}

// Función para obtener el mensaje de texto
const getMensaje = () => {
    const http = new XMLHttpRequest();
    http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
            document.getElementById("mensaje").innerHTML = http.responseText;
        }
    };

    // Configurar la solicitud para obtener el mensaje de texto
    http.open('GET', 'http://localhost/backav/js_ajax/gracias.txt', true);
    http.send();
}
