/*arrow fuction 
duncion de flecha*/
/* funcion suma (numero1, numero2)
// operacion o codigo */

const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}
let numero1= parseInt(prompt('Numero 1'));
let numero2= parseInt(prompt('Numero 2'));
let suma = sumar(numero1, numero2);

document.write(`la suma de ${numero1} y ${numero2} es ${suma} <br>`);