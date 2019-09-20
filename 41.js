/*
41. Hacer un programa que nos permita dar altas en el archivo DATOS.DAT, cuyos campos son:
    ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO.
*/
let id;
let name;
let lastNanem;
let direction;
let state;
const Data = require('./Data');
const fs = require('fs');
const rl = require('readline-sync');


id = rl.question('Enter ID: ');
name = rl.question('Enter name; ');
lastName = rl.question('Enter last name: ');
direction = rl.question('Enter direction: ');
state = rl.question('Enter state: ');

let json = JSON.stringify(new Data(id,name,lastName,direction,state));

fs.writeFileSync('./DATOS.DAT',json);