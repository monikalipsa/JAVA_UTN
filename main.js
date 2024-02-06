
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


        function validar (elemento){
         const value = elemento.value;
         const name = elemento.name;

         if (value === ' '){
           document.getElementById('error_' + name).innerHTML = 'El campo es obligatorio'
       } else {
           document.getElementById ('error_' + name).innerHTML = '';
         }
        
        } 




    //  ----------------------------------------------------------------
//     const getMensaje = () => {
//       const http = new XMLHttpRequest();
//       http.onreadystatechange = () => {
//            console.log ("onreadystatechange");
//            console.log (http.readyState);
//            console.log (http.status);
                 
//            if (http.readyState == 4 && http.status == 200){
                
//                 document.getElementById("mensaje").innerHTML = http.responseText;
//       }
//   }; 
//   http.open('GET', 'http://localhost/BACKAV/entrega_mod2_js/gracias.txt', true);
//   http.send();
  
//   }
// const registrarse =() => {
//   getMensaje();

  // }
