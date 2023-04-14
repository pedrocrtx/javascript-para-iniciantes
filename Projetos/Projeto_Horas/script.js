function carregar () {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    // let hora = 22 (comando teste)
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'Imagens/manha_circ.png'
        document.body.style.background = '#b08c72'
    } else if (hora > 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'Imagens/tarde_circ.png'
        document.body.style.background = '#db6e19'
    } else if ( hora > 18 && hora < 24) {
        // BOA NOITE
        img.src = 'Imagens/noite_circ.png'
        document.body.style.background = '#1461b9'
    }
}

