/*Flujo orden en la que se ejecutan las decaraciones */

let miVariable = 10;
console.log(miVariable);

/*Estructuras de control de flujo*/

let edad = 16;
let tienesINE = true;

if (edad >= 18 && tienesINE == true) {
    console.log('Puedes entrar')
}
else {
    console.log('No puedes entrar')
}
/*Operador ternario 
(condicion a evaluar ? se ejecuta si es verdadero : se ejecuta si es falso) */
/* Primera opcion*/
let edad1 = 17;
(edad >= 18)
    ? console.log("Mayor de edad")
    : console.log("Menor de edad");

/*Segunda opcion */
let pregunta = (edad1 >= 18)
    ? "Mayor de edad"
    : "Menor de edad"
console.log(pregunta);

/*Tercera opcion  */
/*let preguntaEdad = `Tengo $`{}*/

let dia = 5;

if (dia ===0) {
    console.log("Domingo");
}
else if (dia === 1) {
    console.log("Lunes")
}
else if (dia === 2) {
    console.log("Martes")
}
else if (dia === 3) {
    console.log("Miercoles")
}
else if (dia === 4) {
    console.log("Jueves")
} else if (dia === 5) {
    console.log("Viernes")
} else if (dia === 6) {
    console.log("Sabado")
} else { console.log("este no es un dia") }


// switch- case 
/*switch (variable a evaluar) {
    case valuar : - codigo a ejecutar -
    break:

    case valor :
        -codigo a ejecutar-
        break:
        default:
            -codigo a ejecutar si sale a las operaciones-
            break:
} */

switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
        default:
            console.log("No es un dia valido");
            break;
}
let cuponDescuento = "Oro"
let descuento;
console.log(descuento);

switch(cuponDescuento)
{
    case "Bronce":
    descuento = 5;
    break;
    case "Plata":
    descuento = 10;
    break;
    case "Oro":
        descuento =15;
    default:
    console.log("Cupon erroneo")
    break;
}
console.log(descuento);