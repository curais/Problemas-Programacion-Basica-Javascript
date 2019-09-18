/*
27. Realizar la tabla de multiplicar de un 
    numero entre 0 y 10
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line',(line)=>{
    for(let i = 1; i <= 10; i++){
        console.log(`${line} X ${i} = ${Number.parseInt(line)*i}`);
    }
    rl.close();
});
rl.prompt();