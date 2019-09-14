/**
 * 10 -> Introducir un numero por teclado y que nos diga si es par o impar
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
        ((number % 2) == 0) ? console.log("Even") : console.log("Odd");
    }
    rl.close();
});