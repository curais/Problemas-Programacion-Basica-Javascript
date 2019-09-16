/*
17. Imprimir, contar y sumar los multiplos de 2 que hay entre una serie de numeros
    tal que el segundo sea mayor o igual que el primero
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Sorts by insertion an array of numbers
 * @param {number[]} numbers array of numbers
 */
function sort(numbers){
    let key, j;
    for(let i = 1; i < numbers.length; i++){
        key = numbers[i];
        j = i - 1;

        while(j >= 0 && numbers[j] > key){
            numbers[j+1] = numbers[j];
            j = j - 1;
        }
        numbers[j+1] = key;
    }
}

let sum = 0;
let count = 0;

rl.on('line', (line) =>{ 
    let numbers = line.split(',');
    //console.log(numbers);
    //Forzo que sean numeros porque despues pasan cosas raras en la ordenación
    for(let i = 0; i < numbers.length; i++){
        numbers[i] = Number.parseInt(numbers[i]);
    }
    //console.log(numbers);
    
    sort(numbers);
    //console.log(numbers);
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 == 0){
            count++;
            sum += numbers[i];
            console.log(numbers[i]);
        }
    }
    console.log("Total of even numbers: " + count);
    console.log("Sum of al even numbers: " + sum);
    rl.close();
});
 
console.log("Enter a series of numbers separated by commas");
rl.prompt();