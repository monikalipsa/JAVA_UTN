
     function registrarse (){
           const nombre = document.getElementById ("nombre") .value;
           const apellido = document.getElementById ("apellido") .value;
           const telefono = document.getElementById ("telefono") .value;
           const email = document.getElementById ("email") .value;
           const tipoContacto = document.getElementById ("tipoContacto") .value;
           const asunto = document.getElementById ("asunto") .value;
           const descripcion = document.getElementById ("descripcion") .value;
          
// ---------------------------------------CAMPO OBLIGATORIO----------------------------
             if (nombre == '' ) {
                document.getElementById ('error_nombre').innerHTML = 'El campo es obligatorio';
                document.getElementById ('error_apellido').innerHTML = 'El campo es obligatorio';
                document.getElementById ('error_email').innerHTML = 'El campo es obligatorio';
                document.getElementById ('error_asunto').innerHTML = 'El campo es obligatorio';
                document.getElementById ('error_descripcion').innerHTML = 'El campo es obligatorio';
             
               } else {
                 document.getElementById ('error_nombre').innerHTML = ' ';
             }
                console.log (nombre, apellido, telefono, email,tipoContacto,asunto, descripcion,);

               } 
// ------------------------validar todos los campos----------------------------------------------------------

function validar(elemento) {
  const value = elemento.value.trim(); // trin: eliminar espacios en blanco al principio y al final
  const name = elemento.name; // Obtener el nombre del elemento

  // Verificar si el campo está vacío
  if (value === '') {
      document.getElementById('error_' + name).innerHTML = 'El campo es obligatorio';
  } else {
      document.getElementById('error_' + name).innerHTML = ''; // Limpiar el mensaje de error
  }
}

 //  -------------------------mail---------------------------------------
//  function validarEmail() {
//     const emailInput = document.getElementById('email');
//     const email = emailInput.value.trim();
//     const errorElement = document.getElementById('error_email');

//     if (!email.includes('@')) {
//         errorElement.textContent = 'El correo electrónico debe contener @';
//     } else {
//         errorElement.textContent = '';
//     }
// }


    //  --------------------------Ajax--------------------------------------
  //   const getMensaje = () => {
  //      const http = new XMLHttpRequest();
  //      http.onreadystatechange = () => {
  //          console.log("onreadystatechange");
  //          console.log(http.readyState);
  //          console.log(http.status);
  
  //          if (http.readyState == 4 && http.status == 200) {
  //              document.getElementById("mensaje").innerHTML = http.responseText;
  //          }
  //      };
  
  //      http.open('GET', 'http://localhost/backav/entrega_mod2_js/form.html/gracias.txt', true);
  //      http.send();
  //  };
  

  //  getMensaje();

  // -----------------------------------------------------------------------------

  //  const getMensaje = () => {
  //   const url = 'http://localhost/backav/entrega_mod2_js/gracias.txt';
  //    const http = new XMLHttpRequest();
  //    http.onreadystatechange = () => {
  //      if (http.readyState == 4 && http.status == 200) {
  //        document.getElementById("mensaje").innerHTML = http.responseText;
  //      }
  //    };
  //    http.open('GET', url, true);
  //    http.send();
  //  };
   // -----------------------------------------------------------------------------

//     function ajax () {
//      const http = new XMLHttpRequest();
//      const url = 'http://localhost/backav/entrega_mod2_js/form.html';
//      http.onreadystatechange = function() {
//        if (this.readyState == 4 && http.status == 200) {
//              console.log (this.responseText);
//              document.getElementById("mensaje").innerHTML = this.responseText;
//      }
//     }
//     http.open('GET', url, true);
//     http.send(); 
//  }
//   document.getElementById("submit").addEventListener("click", function(){
//      ajax();
//    });
  
  
//    innerHTML = http.responseText;
// ___________________________________________________________
const getMensaje = () => {
  const url = 'http://localhost/backav/entrega_mod2_js/gracias.txt';
  const http = new XMLHttpRequest();
  
  http.onreadystatechange = () => {
      if (http.readyState == 4 && http.status == 200) {
          document.getElementById("mensaje").innerHTML = http.responseText;
      }
  };
  
  http.open('GET', url, true);
  http.send();
};

document.getElementById("submit").addEventListener("click", function(){
  getMensaje();
});


