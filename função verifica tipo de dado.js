let tipo;

function tipoDado(tipo){
    console.log(tipo + " é do tipo " + typeof tipo);
}


function verificaTipo(tipo){
    if(typeof tipo === 'string'){
        console.log("É uma string");
    } else if(typeof tipo === 'number'){
        console.log("É um numero");
    } else if(typeof tipo === 'boolean'){
        console.log("É um boolean");
    }
}

tipoDado(3);
tipoDado("Gabriel");
tipoDado(true);

verificaTipo(3);
verificaTipo("Gabriel");
verificaTipo(false);

