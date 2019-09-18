/*
19. Hacer un programa que simule el funcionamiento de un
    reloj digital y que permita ponerlo en hora
*/
function displayTime(){
    let d = new Date();
    //Nomas agarro la substring y me evito calculos que ya de por si
    //la clase hace
    let m = d.toTimeString().substr(0,8); 
    console.log(m);
    setTimeout(displayTime,1000);
}
displayTime();