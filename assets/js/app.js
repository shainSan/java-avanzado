let title = document.getElementById('title');

console.log(title);
title.textContent = 'Este texto esta escrito por java'

/*Para acceder a elementos se puede ser por id,name,tapa name 
 */
let parrafos = document.getElementsByTagName ('p');
console.log(parrafos);

/*parrafos[0] .textContent = 'Parrafos escritos por java'*/
 /*for( let i=0; i < parrafos.length; i++) {
     parrafos [i].textContent = 'parrafo' + i + 'Escritos por java script'
 }*/
 let email = document.getElementById ('email');
 let password = document.getElementsByTagName('password');
 
  function getInformation(){
      console.log(email.value);
      console.log(password.value);
  }

