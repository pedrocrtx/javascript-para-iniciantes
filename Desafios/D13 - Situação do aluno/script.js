function clicar () {
    var aluno = window.prompt('Qual é o nome do aluno?')
    var nota1 = window.prompt(`Primeira nota de ${aluno}:`)*1;
    
    var nota2 = window.prompt(`Segunda nota de ${aluno}:`)*1;
    
    var nota3 = window.prompt(`Terceira nota de ${aluno}:`)*1;
    
    var res = window.document.getElementById('msg')
    /*
    var n1 = Number[nota1]
    var n2 = Number[nota2]
    var n3 = Number[nota3]
    */
    var media = ((nota1 + nota2 + nota3)/3).toFixed(2)


    if (media < 3) {
        res.innerHTML = `<h1>Analisando a situação de ${aluno}</h1>
        <p>Com as notas ${nota1}, ${nota2} e ${nota3}, a <strong>média é ${media}</strong></p>
        <p>Com média menor que 3,0, o aluno está <span id='reprovado'>REPROVADO</span></p>`
    } else if (media >= 3 && media < 6) {
        res.innerHTML = `<h1>Analisando a situação de ${aluno}</h1>
        <p>Com as notas ${nota1}, ${nota2} e ${nota3}, a <strong>média é ${media}</strong></p>
        <p>Com média entre 3,0 e 6,0, o aluno está em <span id='recuperacao'>RECUPERAÇÃO</span></p>`
    } else {
        res.innerHTML = `<h1>Analisando a situação de ${aluno}</h1>
        <p>Com as notas ${nota1}, ${nota2} e ${nota3}, a <strong>média é ${media}</strong></p>
        <p>Com média acima de 6,0, o aluno está <span id='aprovado'>APROVADO</span></p>`
    }

    
    
}