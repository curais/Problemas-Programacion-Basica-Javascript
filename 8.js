/**
 * 8 -> Hacer un programa que solo nos pemita introducir S o N
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter character: ', (answer)=>{
    if (!(answer === 'S' || answer === 'N')){
        console.log('Invalid character');
    }
    else console.log('Ok');
    rl.close();
});