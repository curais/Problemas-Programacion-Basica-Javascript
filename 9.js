/**
 * 9 -> Introducir un numero por teclado y que nos diga si es positivo o negativo
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter number: ',(number)=>{
    if(isNaN(number)){ 
        console.log("Is not a number") 
    }else{
        (number < 0) ? console.log("Negative number") : console.log("Positive number");
    }
    rl.close();
});