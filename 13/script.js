let students = [
        {name: "Carlos", nota1: 4, nota2: 5},
        {name: "Alberto", nota1: 7, nota2: 7},  
        {name: "Andressa", nota1: 5.5 ,nota2: 8.5},
        {name: "Larissa", nota1: 10, nota2: 10}
    ]
    
    const calcMedia = (nota1, nota2) => {
        return((nota1 + nota2) / 2).toFixed(2)
    }

    for (let media of students) {

        if(calcMedia(media.nota1, media.nota2) >= 7) {
            alert(`A média do(a) aluno(a) ${media.name} é: ${calcMedia(media.nota1,media.nota2)}
            Parabéns, ${media.name}! Você foi aprovado(a) no concurso!`)

        }
        else{
            alert(
                `A média do(a) aluno(a) ${media.name} é: ${calcMedia(media.nota1, media.nota2)}
            Não foi dessa vez, ${media.name}! Tente novamente!`)
        }
    }