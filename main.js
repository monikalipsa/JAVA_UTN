document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('form_contacto');
    const mje = document.getElementById('mensaje');

    const validarCampo = (elemento) => {
        const campo = elemento.value.trim();
        const error = document.getElementById('error_' + elemento.id);

        if (!campo) {
            error.innerText = 'Este campo es obligatorio';
            elemento.classList.add('error');
            return false;
        } else {
            error.innerText = '';
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
            document.getElementById('camposObligatorios').innerText = 'Campos obligatorios incompletos';
        }
    };
    document.getElementById('enviarBtn').addEventListener('click', function() {
        document.getElementById('camposObligatorios').innerText = '';
    });

    const enviarFormulario = () => {
//-----------------------------mje txt------------------------------------------------
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    mje.innerText = xhr.responseText;
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
        formulario.reset();
    };

    document.getElementById('enviarBtn').addEventListener('click', validarFormulario);
});