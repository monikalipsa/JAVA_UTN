
  //   function registrarse (){
  //         const nombre = document.getElementById ("nombre") .value;
  //         const apellido = document.getElementById ("apellido") .value;
  //         const telefono = document.getElementById ("telefono") .value;
  //         const email = document.getElementById ("email") .value;
  //         const tipoContacto = document.getElementById ("tipoContacto") .value;
  //         const asunto = document.getElementById ("asunto") .value;
  //         const descripcion = document.getElementById ("descripcion") .value;
  //         const password = document.getElementById ("password") .value;
  //         const confirmPassword = document.getElementById ("confirmPassword") .value;

  // //     //  __________________________________________________________


  //          if (nombre == '') {
  //             document.getElementById ('error_nombre').innerHTML = 'El campo es obligatorio';
  //          } else {document.getElementById ('error_nombre').innerHTML = '';
  //          }
            
  //           console.log (nombre,apellido,telefono,email, tipoContacto, asunto, descripcion, password, confirmPassword);

  //          } 


    //   function validar(elemen){
    //    const value = elemen.value;
    //    const name = elemen.name;
    //    if (value === ' '){
    //      document.getElementById('error_' + name).innerHTML = 'El campo es obligatorio'
    //  } else {
    //      document.getElementById ('error_' + name).innerHTML = '';
    //    }
    //   }

    //  ----------------------------------------------------------------
    const getMensaje = () => {
      const http = new XMLHttpRequest();
      http.onreadystatechange = () => {
           console.log ("onreadystatechange");
           console.log (http.readyState);
           console.log (http.status);
                 
           if (http.readyState == 4 && http.status == 200){
                
                document.getElementById("mensaje").innerHTML = http.responseText;
      }
  }; 
  http.open('GET', 'http://localhost/BACKAV/entrega_mod2_js/gracias.txt', true)
  http.send()
  
  }
const registrarse =() => {
  getMensaje()

}
