let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');
$texto.id= 'texto';
/*$texto.style = 'color: red; font-size: 24px'; */
//$texto.className = 'bg-purple';
//$texto.className = 'h3';
$texto.className = 'bg-purple h3';
// Agrega las clases anteriores puede remover elementos
$texto.classList.add('text-center');
$texto.classList.remove('bg-purple');