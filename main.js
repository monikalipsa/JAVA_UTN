document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form_contacto');
    const mensajeDiv = document.getElementById('mensaje');

    const validarCampo = (elemento) => {
        const valorCampo = elemento.value.trim();
        const mensajeError = document.getElementById('error_' + elemento.id);

        if (!valorCampo) {
            mensajeError.innerText = 'Este campo es obligatorio';
            elemento.classList.add('error');
            return false;
        } else {
            mensajeError.innerText = '';
            elemento.classList.remove('error');
            return true;
        }
    };

    const validarFormulario = () => {
        const camposObligatorios = ['nombre', 'apellido', 'email', 'tipoContacto', 'asunto', 'descripcion'];
        let camposIncompletos = false;

        camposObligatorios.forEach(campo => {
            if (!validarCampo(document.getElementById(campo))) {
                camposIncompletos = true;
            }
        });

        if (!camposIncompletos) {
            enviarFormulario();
        } else {
            document.getElementById('camposObligatorios').innerText = 'Campos obligatorios no completados';
        }
    };

    const enviarFormulario = () => {
        // Simular la solicitud AJAX para cargar el mensaje desde el archivo mensaje.txt
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    mensajeDiv.innerText = xhr.responseText;
                    resetearFormulario();
                } else {
                    console.error('Error al cargar mensaje.txt');
                }
            }
        };
    
        xhr.open('GET', 'mensaje.txt', true);
        xhr.send();
    };
    

    const resetearFormulario = () => {
        form.reset();
    };

    document.getElementById('enviarBtn').addEventListener('click', validarFormulario);
});
