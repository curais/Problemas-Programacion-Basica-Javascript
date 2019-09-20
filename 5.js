/*
5.  Hacer un programa que imprima los números impares hasta el 100 y que imprima cuantos
    impares hay. 
*/
let count = 0;
for (let i = 1; i <= 50; i++){
    console.log((2*i)-1);
    count++;
}
console.log("Odds: " + count);