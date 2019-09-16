/*
18. Hacer un programa que cuente las veces que 
    aparece una determinada letra en una frase 
    que introduciremos por teclado
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let ch;
let count = 0;
rl.question("Enter the character to search: ", (answer)=>{
    ch = answer;
});
rl.on('line', (line) =>{ 
    for(let c of line){
        if (c === ch) count++;
    }
    let msg = `Number of ${ch}´s in phrase is ${count}`
    console.log(msg);
    rl.close();
});
rl.prompt();
