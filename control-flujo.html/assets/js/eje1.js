let precioReal =  300; parseInt(prompt("introduce el precio"));
let cuponDescuento = prompt("Introduce tu cupon");
let descuento;

console.log(precioReal);

switch(cuponDescuento){
case "Bronce":
    descuento = .5;
break;
case "PLata":
    descuento = .10;
    break;
    case "Oro":
    descuento = .15;
break;
case "Platino":
descuento = .20;
break;
default:
    console.log("cupon de erroneo")
    break;
}
let total;


