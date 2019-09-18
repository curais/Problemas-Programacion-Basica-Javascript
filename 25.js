/*
25. Introducir un numero menor de 5000 y pasarlo a romado
*/
function parseToRoman(){

}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line',(line)=>{
    if(Number.parseInt(line) > 500){
        console.log('No te pases');
        rl.close();
    }
    console.log(parseToRoman());
    rl.close();
});