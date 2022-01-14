let numeros = [1, 3, 5, 6, 67, 78,];
/*For each  
es una fincion anonima que nos devuelve el arreglo fuincion desechable 
en singular saca un numero en cada vuelta*/
/*numeros.forEach( function (elemento, indice){
    document.write (elemento + '-' + indice + "<br/>");
    }); 
    Noa ayuda a separar el elemento con el indice con el - */

/*Opcion 1  */
/*numeros.forEach( function (elemento){
document.write (elemento + ',') ;
}); */
/* Opcion 2 */
numeros.forEach(elemento => {
    document.write(elemento + ',');
});
/*MAP 
Funcion anonima recorre los elementos y nosotros los vamos avanzando
 Nos permite crear 1 arregl dentro de otro arreglo con arreglos diferentes*/
let numeros2 = numeros.map(function (elemento) {
    return elemento;
});
document.write("<br>" + numeros2);
/* En este ejercicio se agrega en las 2 variables la pera con el push*/
/*let frutas=["mango", "sandia", "maracuya"];
let frutas2= frutas;

frutas2.push("pera");
document.write("<br>" + frutas + "<br>");
document.write("<br>" + frutas2 + "<br>");*/

/*Para que solo uno de los elementos se modifique */
let frutas=["mango", "sandia", "maracuya"];
let frutas2 = frutas.map(function(elemento){
    return elemento;
})

frutas2.push("pera");
document.write("<br>" + frutas + "<br>");
document.write("<br>" + frutas2 + "<br>");

/*Variedades de Map
Arreglo con los elementos multiplicados por 2 
return elemento * 2: */

/*Includes
 es para saber si incluye un elemento o no*/
document.write ("<br>" + numeros.includes(78) + "<br>");
 
/*filter
filtra los elementos */
document.write ("<br>" + numeros.includes("hola") + "<br>");

let numerosPares = numeros.filter((elemento) => {
/*Opcion 1*/
/* if( elemto % 2 == 0){
    return false ;
}else {
    return true;
}
console.log (elemento % 2 ==0);
} */
/*return elemento % 2 == 0;*/
if(elemento > 10 )
{
    return true;
}
});
document.write("<br>" + numerosPares + "<br>");

let frutasTropicales = ["mango", "sandia", "maracuya", "mandarina", "naranja", "uva"];

let frutasFiltro = frutasTropicales.filter((fruta) => {
/*if(fruta.includes('i') == true) {
return true;
 } */
 return fruta.includes('m');
});

document.write('<br>' + frutasFiltro + '<br>');

/*Sort ordena los elementos  */
let otrosNumeros =[9, 5, 7, 6, 8, 90, 87,];
document.write('<br>' + otrosNumeros.sort() + '<br>');

/*Reverse invierte el orden de los numeros de el arreglo */
document.write ('<br>' + numeros.reverse() + '<br>');


/*Find  nos sirve para buscar un elemento que cumpla una condicion que nos devuelve solo un elemento el primero que encuentre*/
let frutaEncontrada = frutas.find((elemento) => {
    return elemento.toLowerCase().toLocaleLowerCase.includes('m');
});