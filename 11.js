/**
 * 11 -> Imprimir y contar los multiplos de 3 desde el uno hasta un numero que
 * introduzcamos por tecldo
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
        /**
         * Aunque la instrucción dice desde el 1
         * la realidad es que el primer multiplo de 3 
         * es el mismo 3
         */
        for(let i = 3; i <=number; i = i+3){
            console.log(i);
        }
    }
    rl.close();
});