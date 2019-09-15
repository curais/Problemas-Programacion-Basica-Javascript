const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input number: ',(answer) =>{
    for (let i = 0; i <= answer; i++){
        console.log(i);
    }
    rl.close();
} );


