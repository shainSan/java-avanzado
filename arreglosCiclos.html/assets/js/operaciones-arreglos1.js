const números = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]
let add = 0;
for (let i = 0; i < números.length; i ++){
    add += números[i];
}
document.write("La variable es" + add + "numero de personas" + "<br>");
let mean = add / números.length;
document.write("personas" + mean);