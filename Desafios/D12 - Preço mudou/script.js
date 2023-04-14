function clicar () {
    var panterior = window.prompt('Qual era o preço anterior do produto?')
    var patual = window.prompt('Qual é o preço atual do produto?')
    var res = window.document.getElementById('msg')
    
    var va = (panterior - patual)
    var modulo = Math.abs(va)
    var porc = ((modulo/patual)*100).toFixed(2)

    if (va < 0) {
        res.innerHTML = `<h1>Analisando os valores informados</h1>
        <p>O produto custava R$ ${panterior} e agora custa R$ ${patual}.</p>
        <p>Hoje o produto está mais caro.</p>
        <p>O preço aumentou R$ ${modulo} em relação ao preço anterior.</p>
        <p>Uma variação de ${porc}% para cima.</p>`
    } else {
        res.innerHTML = `<h1>Analisando os valores informados</h1>
        <p>O produto custava R$ ${panterior} e agora custa R$ ${patual}.</p>
        <p>Hoje o produto está mais barato.</p>
        <p>O preço diminuiu R$ ${modulo} em relação ao preço anterior.</p>
        <p>Uma variação de ${porc}% para baixo.</p>`
    }

    
    
}