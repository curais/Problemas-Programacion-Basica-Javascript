/*
6. Hacer un programa que imprima todos los números naturales que hay desde el uno hasta un
   número que introducimos por teclado.
*/
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input number: ',(answer) =>{
    for (let i = 0; i <= answer; i++){
        console.log(i);
    }
    rl.close();
} );


