/**
 * 13 -> Imprimir y contar los numeros 
 * que son multiplos de 2 o de 3 que 
 * hay entre 1 y 100
 */

let count = 0;

for(let i = 1; i<= 100; i++){
    if ( i % 2 == 0 || i % 3 == 0){
        count++;
        console.log(i);
    }
}
console.log("Numbers: "+count);