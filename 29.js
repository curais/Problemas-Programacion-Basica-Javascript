/*
29. Simular cien tiradas de dos dados y contar las
    veces que entre los dos suman 10;
*/
let count = 0;
for(let i = 0; i < 100;i++){
    let d1 = 1 + Math.round(Math.random()*5);
    let d2 = 1 + Math.round(Math.random()*5);
    if (d1 + d2 == 10) count++;

}
console.log(`Number of occurrences: ${count}`);