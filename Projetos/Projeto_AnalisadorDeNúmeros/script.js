    let numero = window.document.getElementById('num');
    let s = window.document.getElementById('sel');
    let res = window.document.getElementById('res')
    let valores = []
    
    function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }

    function inLista(n,l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }   

    function ad () {
        if (isNumero(numero.value) && !inLista(numero.value, valores)) {
            valores.push(Number(numero.value))
            let item = document.createElement('option')
            item.text = `Valor ${numero.value} adicionado`
            s.appendChild(item)
            res.innerHTML = ''
        } else {
            window.alert('Valor inválido ou ja encontrado na lista.')
        }
        numero.value=''
        numero.focus()
    }

    function ver() {
        if (valores.length == 0) {
            window.alert('Adicione valores antes de finalizar!')
        } else {
            let tot = valores.length
            let maior = valores [0]
            let menor = valores [0]
            let soma = 0
            let media = 0
            for(let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior) 
                    maior = valores[pos]
                if (valores[pos] < menor)
                    menor = valores[pos]
            }
            media = (soma / tot).toFixed(2) 
            res.innerHTML=''
            res.innerHTML += `<p> Ao todo, temos ${tot} número cadastrados. </p>`
            res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
            res.innerHTML += `<p>O menor valor informador foi ${menor}. </p>`
            res.innerHTML += `<p>Somando todos os valores, temos ${soma} </p>`
            res.innerHTML += `A média dos valores digitados é ${media}. </p>`
        }
    }


   /* function ad () {
    
    if (numero.value.length == 0 || Number(numero.value) > 100) {
        alert('[ERRO] Digite um número entre 1 e 100')
    } else {
        c = 0 
        s.innerHTML = ''
        let n = Number(numero.value)
        let item = document.createElement('option')
        for (c = 1; c <= 50; c++)
        item.text += "Valor " + n + " adicionado. \n";
        s.appendChild(item)
    }
}

function ver () {

} */