function experiencia(anos){
    if(anos >= 7){
        return('Jedi Master');
    } else if(anos <7 & anos>=3){
        return('Avançado');
    } else if(anos <3 & anos>1){
        return('Intermediário');
    } else if(anos <=1 & anos>0){
        return('Iniciante')
    }
}

var anosEstudo = 7;
console.log(experiencia(anosEstudo));