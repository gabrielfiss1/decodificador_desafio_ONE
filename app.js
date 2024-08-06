function validaCampo(){
    let palavra = document.querySelector('textarea').value;
    palavra.toLowerCase();
    return console.log(palavra);
}

function criptografar(){
    let palavra = document.querySelector('textarea').value;
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

        palavra = document.querySelector('textarea').value = '';
    let campo = document.getElementById('resultadoTexto');
    campo.innerHTML = textoCriptografado;
        //return console.log(textoCriptografado);
}

function descriptografar(){
    //let campo = document.getElementById('resultadoTexto').innerHTML;
    let palavra = document.querySelector('textarea').value;
    let DesCriptoE = 'e';
    let DesCriptoI = 'i';
    let DesCriptoA = 'a';
    let DesCriptoO = 'o';
    let DesCriptoU = 'u';    

    let textoDescriptografado = palavra.replaceAll('enter', DesCriptoE);
        textoDescriptografado = textoDescriptografado.replaceAll('imes', DesCriptoI);
        textoDescriptografado = textoDescriptografado.replaceAll('ai', DesCriptoA);
        textoDescriptografado = textoDescriptografado.replaceAll('ober', DesCriptoO);
        textoDescriptografado = textoDescriptografado.replaceAll('ufat', DesCriptoU);

        palavra = document.querySelector('textarea').value = '';
        let campo = document.getElementById('resultadoTexto');
        campo.innerHTML = textoDescriptografado;
}

function validaCampo(){
    document.querySelector('textarea').addEventListener('keydown', function(event) {
        let regex = /[A-Z]\b/; // bloqueia letras maisculas
        if (event.key.match(regex)) {
            event.preventDefault();
            console.log('tecla nao permitida')
        }
    });
}

