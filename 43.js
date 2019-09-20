/*
43. Dado el archivo DATOS.DAT, realizar un programa que nos permita realizar modificaciones
    cuantas veces deseemos.
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
let map = new Map();

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
    map.set(obj.id, obj);
    //console.log(map);
    fr.close();
}).on('close',()=>{
    rl.question("Enter ID to modify it's entry and then enter the parameter to modify and it's new value all separated by commas: ", (answer) => {
        let data = answer.split(',');
        processObj(map.get(data[0]),data[1].toLowerCase(),data[2]);
        for (c of map.values()) {
            fs.writeFileSync('./DATOS.DAT', JSON.stringify(c));
        }
        rl.close();
    });
});