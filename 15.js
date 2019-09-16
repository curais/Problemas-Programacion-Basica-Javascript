/*
15. Introducir dos numeros por teclado, imprimir los numeros naturales
    que hay entre ambos numeros empezando por el mas pequeño contar 
    cuantos hay y cuantos de ellos son pares. Calcular la suma de los impares
*/


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let sumO = 0;
let count = 0;
let bounds = new Array(2);

// No se si esta parte sea mala practica, solo se me ocurrio hacerlo asi y parece ser facil
let lineCount = 0;
rl.on('line', (line) => {
    bounds[lineCount] = Number.parseInt(line);
    lineCount++;
    if (lineCount == 2) {
        // Modfico el arreglo a mi conveniencia para no andar reescribiendo el mismo codigo
        if (bounds[0] > bounds[1]) {
            let aux = bounds[0];
            bounds[0] = bounds[1];
            bounds[1] = aux;
        }
      
        for (let i = bounds[0]; i <= bounds[1]; i++) {
            if (i % 2 == 0) count++;
            else sumO += i;
        }
        console.log("Total numbers: " + (bounds[1] - bounds[0]));
        console.log("Even numbers: " + count);
        console.log("Sum of odd numbers: " + sumO);
        rl.close();
    }
});


console.log("Enter two numbers");
rl.prompt();

