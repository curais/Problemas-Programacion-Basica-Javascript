/*
42. Hacer un programa que nos permita dar bajas en el 
    fichero DATOS.DAT
*/
const fs = require('fs');
const readline = require('readline');
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
//No se si esté bien, personalmente creo que es un cochinero asincrono
fr.on('line', (line) => {
    let obj = JSON.parse(line);
    map.set(obj.id, obj);
    //console.log(map);

    rl.question('Enter ID to delete: ', (answer) => {
        map.delete(answer);
        for (c of map.values()) {
            fs.writeFileSync('./DATOS.DAT', JSON.stringify(c));
        }
        rl.close();
    });
});
