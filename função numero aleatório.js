let num;

function numeroAleatorio(num){
    let sorteio= Math.floor((Math.random()*num)) + 1;
    console.log("O numero sorteado foi " + sorteio);
}

/*
Multiplicar math.radom() por um numero, delimita os 
valores randomicos a tal numero.
*/

numeroAleatorio(4);
numeroAleatorio(100);