/*
21. Hacer un programa que calcule independientemente 
    la suma de los pares y los impares de los numeros
    entre el 1 y el 1000
*/
let sumO = 0;
let sumE = 0;
for (let i = 1; i<= 1000; i++){
    if(i % 2 == 0) sumE += i;
    else sumO += i;
}
console.log("Sum of odd numbers: "+sumO);
console.log("Sum of even numbers: " +sumE);