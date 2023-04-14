function clicar () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById ('seltab');
    
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            // item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
    //alert(`${numero}`)
    /*
    for(let c = 1; c <= 10; c++) {
    let t = numero * c
    tabuada += numero + " x " + c + " = " + t + "\n";
    res.innerHTML = tabuada;
    }
    */
        
}