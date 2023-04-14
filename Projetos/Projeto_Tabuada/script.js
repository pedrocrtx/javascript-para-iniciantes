function clicar () {
    let numero = parseInt(document.getElementById('txtnumber').value);
    let res = document.getElementById ('resposta');
    let tabuada = '';

    //alert(`${numero}`)
    
        for(let c = 1; c <= 10; c++) {
        let t = numero * c
        tabuada += numero + " x " + c + " = " + t + "\n";
        res.innerHTML = tabuada;
        }
        
}