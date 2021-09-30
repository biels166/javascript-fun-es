let idade;

function verificaIdade(idade){
    if(idade >= 18){
        console.log("Pode entrar na auto escola.");
    } else {
        console.log("Idade abaixo da permitida.");
    }
}

verificaIdade(30);
verificaIdade(12);
verificaIdade(18);