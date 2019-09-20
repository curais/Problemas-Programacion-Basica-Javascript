/*
39. Crear una tabla de 3 paginas, 4 filas y 5 columnas done el primer elemnto valga1 1
    el segundo 2 y asi sucesivamente
*/
let count = 0;
let str = ""
for(let pagina = 0; pagina < 3; pagina++){
    str += `Tabla #${pagina+1}\n`;
    for(let fila = 0; fila < 4; fila++){
        for(let columna = 0; columna < 5; columna++){
            str += `${++count}\t`;
        }
        str += '\n';
    }
}

console.log(str);
