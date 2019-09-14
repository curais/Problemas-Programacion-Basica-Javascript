/**
 * 14 <- Hacer un programa que imprima el mayor y 
 *       el menor de una serie de cinco números que
         vamos introduciendo por teclado.
 */
function getMax (numbers){
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if(max < numbers[i]) max = numbers[i];
    }
    return max;
}
function getMin (numbers){
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if(min > numbers[i]) min = numbers[i];
    }
    return min;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCount = 0;
let numbers = new Array(5);
rl.prompt();

rl.on('line',(line)=>{
    numbers[lineCount] = parseFloat(line);
    lineCount++;
    if (lineCount == 5) {
        rl.close();
        console.log(numbers);
        console.log('Minimum for given numbers: ' + getMin(numbers));
        console.log('Maximum for given numbers: ' + getMax(numbers));
    }  
})

