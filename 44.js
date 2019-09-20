/*
44. Con el archivo DATOS.DAT listar todos los registros cuyo estado sea uno determinado que
    introduciremos por teclado.
*/
const fs = require('fs');
const readline = require('readline');

function processObj(obj,atr, value){
    switch (atr){
        case 'name':
            obj.name = value;
            break;
        case 'last name':
            obj.lastName = value;
            break;
        case 'direction':
            obj.direction = value;
            break;
        case 'state':
            obj.state = value;
        default:
            throw 'No atribute found';
    }
}
let list = new Array();

//Interfaz para leer lineas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Interfaz para leer archivitos
const fr = readline.createInterface({
    input: fs.createReadStream('./DATOS.DAT'),
    crlfDelay: Infinity
});

fr.on('line', (line) => {
    let obj = JSON.parse(line);
    list.push(obj);
    //console.log(map);
    fr.close();
}).on('close',()=>{
    rl.question("Enter state: ", (answer) => {
        let data = answer.split(',');
        let filtered = list.filter(e => e.state.toLowerCase() === answer.toLowerCase());
        for(c of filtered){
            console.log(c);
        }
        rl.close();
    });
});