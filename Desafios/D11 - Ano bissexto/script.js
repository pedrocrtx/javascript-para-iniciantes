function clicar () {
    var ano = window.prompt('Qual o ano que você quer verificar?')
    var res = window.document.getElementById('msg')
    
    
    if ((ano % 400 == 0) || (ano % 100 != 0 && ano % 4 == 0)) {
        res.innerHTML = (`<h1> Analisando o ano de ${ano}...</h1> <p> O ano de  <span id='bi'>${ano} é bissexto.</span> ✅ </p>`)
    } else {
        res.innerHTML = (`<h1> Analisando o ano de ${ano}...</h1> <p>O ano ${ano} <span id='nbi'>não é bissexto.</span> ❌</p>`)
    }
    
}