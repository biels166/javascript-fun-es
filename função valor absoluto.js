let num; 

function moduloNum(num){
    if(num >= 0){
        console.log("O número deve ser menor que zero.");
    } else {
        let modulo = Math.abs(num);
        console.log(`O módulo de ${num} é ${modulo}.`);
    }
}

moduloNum(33);
moduloNum(-100);