/*
25. Introducir un numero menor de 5000 y pasarlo a romado
*/
function romanize(n) {
	let	values = [1, 5, 10, 50, 100, 500];
	let	letters = ['I', 'V', 'X', 'L', 'C', 'D'];
	let	res = new Array();
	let	num, letter, val, pos;

	for(let i = 5; i >= 0; i--) {
        num = values[i]; 
        letter = letters[i];

		if(n >= num) {
            //Obtenemos la cantidad "letras" 
			let r = Math.floor(n / num); //Ej. floor(385/500) = 0), floor(385/100) = 3, floor(85/50) = 1
			//Restamos las "unidades" ejemplo: 385 - 300 = 85 -> nuevo número, 85 - 50 = 35 y asi sucesivamente
			n -= r * num; 
			if(r < 4){
				// Si las letras se repiten menos de 4 veces, órale pa dentro
				while(r--){
					res.push(letter);//Ej. 300 -> CCC
				}
			} else {
                //Si se repiten cuatro veces o mas
                
				val = res.pop(); // Ultima letra pusheada

				// Si el string es vacío usamos la letra anterior a esa
				pos = (val ? letters.indexOf(val) : i) + 1; 

				res.push(letter + letters[pos]);
			}
		} else {
			// Si no ponemos letra usamos un ""
			// para no afectar los pop
			res.push('');
		}
	}

	return res.join('');
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.prompt();
rl.on('line',(line)=>{
    if(Number.parseInt(line) > 500){
        console.log('No te pases');
        rl.close();
    }
    console.log(romanize(Number.parseInt(line)));
    rl.close();
});