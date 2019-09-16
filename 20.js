/*
20. Calcular el factorial de un numero
*/

function fact(number) {
    if (number <= 0) return 1;
    else return (number * fact(number - 1));
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number to get it's factorial: ", (answer) => {
    console.log(`Factorial of ${answer} is ${fact(Number.parseInt(answer))}`);
    rl.close();
});