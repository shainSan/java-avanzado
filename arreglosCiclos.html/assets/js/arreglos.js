/*Forma 1*/
/*const numeros = []; */
/* Forma 2*/
let numeros = new Array ();
numeros =[ 1, 3, 5, 6, 67, 78,];
console.log(numeros.length);

document.write(numeros[5]); 
for ( let i = 0; i < numeros.length ; i = i + 6){

    document.write (`${numeros[i]}<br/>`);

   /* const numero = numero[i];
    document.write(numero + '<br>');*/
}