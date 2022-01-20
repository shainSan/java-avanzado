/*Codigo sincrono*/

// Forma secuencial 
let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona);

/*Codigo asincrono */
 let variableAsincrona;
//setimeout ejecuta una funcion anonima y tiempo que se tarda en ejecutar  
setTimeout (() => {
    variableAsincrona = 10  * 3;
    console.log (variableAsincrona);
}, 2000);

 console.log (variableAsincrona);
