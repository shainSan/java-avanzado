let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector ('#btnMensaje');
let $spanError = document.querySelector('span');

// Agregar los eventos al elemento 
$btnMensaje.addEventListener('click',function(){
console.log('no me presiones');
});
// Forma 1 
$mensaje.addEventListener('keyup',(e) => {
  /*  console.log('Escribiste algo');*/
  //console.log(e);
  // se puede ver el mensaje que el usuario escribio
  console.log(e.target.value);
  if(e.target.value.length < 3){
      $spanError.classList.remove('hide');
      $spanError.classList.add('error');
  }else{
      $spanError.classList.add('hide');
      $spanError.classList.remove('error');
    
  }
});

//Forma 2 pero puede ocasionar errores
/*
$mensaje.addEventListener('keydown',mostrarConsole);
function mostrarConsole(){
    console.log('Escribiste algo');
} */

