/**
 * 7 -> Introducir tantas frases como queramos y contarlas
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let count = 0;
rl.on('line',()=>{
    count++;
    //console.log("Phrase number: " + count);
}).on('close', () => {
    console.log('Total number of phrases: ' + count);
    process.exit(0);
  });

rl.prompt();

