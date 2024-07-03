function validaCampo(){
    let palavra = document.querySelector('input').value;
    palavra.toLowerCase();
    return console.log(palavra);
}

function criptografar(){
    let palavra = document.querySelector('input').value;
    let criptoE = 'enter';
    let criptoI = 'imes';
    let criptoA = 'ai';
    let criptoO = 'ober';
    let criptoU = 'ufat'
        //texto.toLowerCase()
       let textoCriptografado = palavra.replaceAll('e', criptoE);
        textoCriptografado = textoCriptografado.replaceAll('i', criptoI);
        textoCriptografado = textoCriptografado.replaceAll('a', criptoA);
        textoCriptografado = textoCriptografado.replaceAll('o', criptoO);
        textoCriptografado = textoCriptografado.replaceAll('u', criptoU);

    let campo = document.getElementById('resultadoTexto');
    campo.innerHTML = textoCriptografado;
        //eturn console.log(textoCriptografado);
}

function descriptografar(){
    
}