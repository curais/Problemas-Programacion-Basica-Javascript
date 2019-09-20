/*
38. Ordenar una matriz de M filas y N columnas por la primera columna utilizando
    SHELL (por insercion)
*/
function genMatrix(m, n){
    let matrix =  [];
    for(let i = 0; i < m; i++){
        matrix.push([]);
        for(let j = 0; j < n; j++){
            matrix[i][j] = Math.random();
        }
    }
    return matrix;
}

console.log(genMatrix(99,1).sort((a,b) => {
    if(a[0] === b[0]) return 0;
    return (a[0] < b[0]) ? -1 : 1;
}));
