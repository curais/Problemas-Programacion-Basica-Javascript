/**
 * 12 -> Hacer un programa que imprima los numeros del 1 al 100
 * y qu calcule la suma de todos los numeos pares por un lado y por otro, la de todos los impares
 */
let sumE = 0;
let sumO = 0;
for(let i = 1; i <= 100; i++){
    console.log(i);
    if(i%2 == 0) sumE += i;
    else sumO += i;
}

console.log('Sum of even numbers: ' + sumE);
console.log('Sum of odd numbers: ' + sumO);

//Testeando con formulitas
/*
console.log(50*51); <- Suma de los primeros n pares n(n+1)
console.log(50*50); <- Suma de los primero n impares n²
*/