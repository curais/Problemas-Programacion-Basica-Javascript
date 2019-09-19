/*
31. Hacer un programa que nos permita introducir un numero por teclado
    y sobre el se realicen las siguientes operaciones: comprobar si es primo
    hallar su factorial o imprimir su tabla de multiplicar
*/
function isPrime(n){
    if (n % 2 == 0 || n % 3 == 0) return false;
    let i = 5;
    while(i*i <= n){
        if (n % i == 0 || n % (i + 2) == 0 ){
            return false;
        }
        i += 6;
    }
    return true;
}

function printTable(number){
    for(let i = 1; i <= 10; i++){
        console.log(`${number} X ${i} = ${number*i}`);
    }
}
function fact(number) {
    if (number <= 0) return 1;
    else return (number * fact(number - 1));
}

/**
 * Is a operator handler 
 * @param {String} op  Operation to do
 * @param {Number} n1 Number 1
 */
function operations(op, n){
    switch (op){
        case 'prim':
            return isPrime(n);
        case 'fact':
            return fact(n);
        case 'table':
            return printTable(n);
    }
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let param = new Array();
rl.on('line',(line)=>{
    param = line.split(',');
    console.log(operations(param[0],Number.parseFloat(param[1])));
    rl.close();
});
console.log('Enter operation ("prim","fact","table") and one number separated by a coma');
rl.prompt();