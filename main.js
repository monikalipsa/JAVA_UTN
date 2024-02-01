// console.log("Hola mundo");


// declaracion de variables:
                  //  let bodyElement = document.body;
                  //  console.log (bodyElement);

//si quiero ver el bodi en consola lo puedo hacer de 2 formas
           //1) console.log(document.body)
           //2) con variable:
                          // let bodyElement =document.body;
                          //console.log (bodyElement)

 //----------PARA SELECCIONAR POR ID-------------
         //  let elementoId = document.getElementById('titulo');
         //  console.log (elementoId);     


  //----------PARA SELECCIONAR POR CLASE-------------              
//   let elementoClass = document.getElementsByClassName('header');
//    console.log (elementoClass);     


  //----------PARA SELECCIONAR POR TAG-------------   

//   let elementoTag = document.getElementsByTagName('h2');
//   console.log (elementoTag);     

    //----------PARA CREAR UN ELEMENTO-------------  

   //  let nuevoParrafo = document.createElement('p');
   //  nuevoParrafo.innerHTML = "Parrafo creado";

   //  bodyElement.appendChild(nuevoParrafo)

   // ----------------------------------FORMULARIO-----------------------------------------

   function registrarse (){
         const nombre = document.getElementById ("nombre") .value;
         const apellido = document.getElementById ("apellido") .value;
         const email = document.getElementById ("email") .value;
         const password = document.getElementById ("password") .value;


         if (nombre == '') {
            document.getElementById ('error_nombre').innerHTML = 'El campo es obligatorio';
         } else {document.getElementById ('error_nombre').innerHTML = '';              
          }
            
          console.log (nombre,apellido,email,password)


          } 
            


      // console.log (nombre)