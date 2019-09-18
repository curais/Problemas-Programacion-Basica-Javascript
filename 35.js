/*
35. Generar un matriz de 4 filas y 5 conlumnas con
    numeros aleatorios entre 1 y 100, e imprimirla
*/
let mat = new Array(4);
for (let i = 0; i< mat.length; i++){
    mat[i] = new Array(5);
}

for(let i = 0; i < mat.length; i++){
    for(let j = 0; j < mat[0].length; j++){
        let rand = Math.floor(Math.random() * 100) + 1;
        mat[i][j] = rand;
   }
}
console.log(mat);

