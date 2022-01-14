/*Funcin 
es un bloque de codigo reutiliable 
Pude o no tener parametros de entrada 
Puede terner o no valor 
 */
function sumar(numero1, numero2){
    //Opreaciones o cdigo a ejecutar
return numero1 + numero2;
console.log ("hola desde la funcion");
}

let numero1 = parseInt(prompt('numero1'));
let numero2 = parseInt(prompt('numero2'));
let suma = sumar(numero1, numero2);
 
document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`);
document.write('la suma de' + numero1 + 'y' + numero2 + 'es' + suma);
