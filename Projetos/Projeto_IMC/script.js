let peso = window.document.getElementById('peso')
let altura = window.document.getElementById('altura')
let res = window.document.getElementById('res')

function calc () {
    if (peso.value.length == 0 || altura.value.length == 0) {
        alert('[ERRO] Digite valores válidos')
    } else {
        let p = Number(peso.value)
        let alt = Number(altura.value)
        let imc = (p/(alt*alt)).toFixed(2);

        if ( imc < 18.5) {
            res.innerHTML = `O seu IMC foi de ${imc}, logo você é classificado(a) com <strong>Magreza.</strong> `

        } else if ( imc > 18.5 && imc < 25) {
            res.innerHTML = `O seu IMC foi de ${imc}, logo você é classificado(a) com <strong>peso normal.</strong> `
           
        } else if ( imc >= 25 && imc < 30) {
            
            res.innerHTML = `O seu IMC foi de ${imc}, logo você é classificado(a) com <strong>Sobrepeso.</strong> `

        } else if ( imc >= 30 && imc < 35) {
            res.innerHTML = `O seu IMC foi de ${imc}, logo você é classificado(a) com <strong>obsidade grau I.</strong> `

        } else if ( imc >= 35 && imc < 40) {
           res.innerHTML = `O seu IMC foi de ${imc}, logo você é classificado(a) com <strong>obsidade grau II</strong> `

        } else {
            res.innerHTML = `O seu IMC foi de ${imc}, logo você é classificado(a) com <strong>obsidade grau III.</strong> `
        }
        
    }
}
