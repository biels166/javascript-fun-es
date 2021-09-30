let nome;

function tamanhoNome(nome){
    let tam = nome.length;
    if(tam >= 10){
        console.log("Nome muito longo " + tam);
    } else{
        console.log("Nome dentro do limite " + tam);
    }
}

tamanhoNome("Gabriel");
tamanhoNome("Ana Carolina");