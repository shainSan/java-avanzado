/*DATOS SACADOS DE ESTA LECTURA 
https://lenguajejs.com/javascript/dom/seleccionar-elementos-dom/ */
 /*let titulo = document.getElementById("titulo");
titulo.textContent ="Titulo escrito desde JS"; */
/*textcontent accede al contenido de texto de la etiqueta */

/*Las variables que se conectan al DOM si tiene este signo $*/

/*Especifa el tipo de elemento que hace referencia 
querySelector utilizado para una classe id o una etiqueta se tiene que aplicar un #id .class y si no se coloca nada se selecciona una etiqueta
saca el primer elemento que encuentre 
querySelectorAll es para todos los parrafos que encuentre*/

let $titulo = document.querySelector("#titulo");
$titulo.textContent = "Titulo escrito desde JS";

let $parrafo = document.querySelector('p');
console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll('p');
console.log($parrafos[1].textContent);
 
/* Crea un elemento en la memoria modifica caracteristicas y contenido*/
let subtitulo = document.createElement('h3');
subtitulo.textContent = 'Este es un subtitulo de JS';
// Es para insertar un elemento
// Documento .body al cuerpo .append hace insersiones lo agrega hasta el final

//document.body.append(subtitulo);

/*lo coloca antes del body*/
document.body.insertAdjacentElement('beforebegin',subtitulo);
// lo coloca despues del titulo 
$titulo.insertAdjacentElement('afterend',subtitulo);
$titulo.remove();

let $contenido = document.querySelector('#contenido');
//console.log($contenido.textContent = '<br>');
// todo lo que tiene adentro y modificarlo
//console.log($contenido.innerHTML = '<br>');
//console.log($contenido.textContent = ' hola');
// outer afectar a los eletos que hacer referrencia a todo el elemento 
//console.log ($contenido.outerHTML ='hola');
/*Agrega el elemento que se mande como un hijo */
let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
$contenido.appendChild(contenidoParrafo);
