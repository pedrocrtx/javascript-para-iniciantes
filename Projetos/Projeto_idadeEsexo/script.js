function clicar () {
    let data = new Date()
    let anoatual = data.getFullYear()
    let ano = window.document.getElementById('nasc')
    let res = window.document.getElementById('msg')

        if(ano.value.length == 0 || ano.value > anoatual) {
            window.alert('[ERRO] Verifique os dados e tente novamente')
        } else {
            let sex = window.document.getElementsByName('sex')
            let idade = anoatual - Number(ano.value)
            let genero = ''
            let img = document.createElement('img')
            img.setAttribute('id','foto')
            if (sex[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade < 10) {
                    // criança
                    img.setAttribute('src', 'foto-bebe-m.png')
                } else if (idade > 10 && idade < 21) {
                    //jovem
                    img.setAttribute('src', 'foto-jovem-m.png')
                } else if (idade > 21 && idade < 60) {
                    // adulto
                    img.setAttribute('src', 'foto-adulto-m.png')
                } else {
                    // idoso
                    img.setAttribute('src', 'foto-idoso-m.png')
                }
            } else if (sex[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade < 10) {
                    // criança
                    img.setAttribute('src', 'foto-bebe-f.png')
                } else if (idade > 10 && idade < 21) {
                    //jovem
                    img.setAttribute('src', 'foto-jovem-f.png')
                } else if (idade > 21 && idade < 60) {
                    // adulto
                    img.setAttribute('src', 'foto-adulto-f.png')
                } else {
                    // idoso
                    img.setAttribute('src', 'foto-idoso-f.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = (`Detectamos ${genero} com ${idade} anos`)
            res.appendChild(img)
        }

   

        

    /*
    
        if (sex == 'Masculino' && idade < 2) {
            img.src = 'Imagens/RN-masc.jpg'
        } else if (sex == 'Masculino' && 2 < idade < 12) {
            img.src = 'Imagens/criança-masculino.jpg'
        } else if (sex == 'Masculino' && 12 < idade < 18) {
            img.src = 'Imagens/adolescente-masculino.jpg'
        } else if (sex == 'Masculino' && 18 < idade < 60) {
            img.src = 'Imagens/adulto-masc.jpg'
        } else if (sex == 'Masculino' && idade > 60) {
            img.src = 'Imagens/idoso.jpg'
        } else if (sex == 'Feminino' &&  idade < 2) {
            img.src = 'Imagens/RN-fem.jpg'
        } else if (sex == 'Feminino' && 2 < idade < 12) {
            img.src = 'Imagens/criança-fem.jpg'
        } else if (sex == 'Feminino' && 12 < idade < 18) {
            img.src = 'Imagens/adolescente-feminino.png'
        } else if (sex == 'Feminino' && 18 < idade < 60) {
            img.src = 'Imagens/adulto-mulher.jpg'
        } else if (sex == 'Feminino' && idade > 60) {
            img.src = 'Imagens/idosa.jpg'
        }
    */

    
}