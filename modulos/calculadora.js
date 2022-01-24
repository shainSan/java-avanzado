const sumar =(numero1, numero2) => {
    return numero1 + numero2;
}
const restar = (numero1, numero2) =>{
    return numero1 - numero2;}
    const multiplicar = (numero1, numero2) =>{
        return numero1 * numero2;
    }
    const dividir = (numero1, numero2) =>{
        return numero1 / numero2;
    }
    const mostrarResultado = (operacion, numero1, numero2, resultado) =>{
        const respuesta = document.createElement('h3');
        respuesta.textContent = ` la ${operacion} de ${numero1} y ${numero2} es ${resultado}`;
    document.body.appendChild(respuesta);
   }
    export{
        sumar, restar, multiplicar, dividir, mostrarResultado
    }
    // tambien se puede poner el expor en cada uno de las constantes hay que checar cada uno de los detalles con las carpetas y donde se colocan tienen que tener la extencion de .js
    