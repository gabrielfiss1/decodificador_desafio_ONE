
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

function validaCampo() {
    let spanAlerta = document.getElementById('spanAlerta');
    let buttonCripto= document.getElementById('criptoButton');
    let buttonDecripto= document.getElementById('decriptoButton');
    let spanInfo = document.getElementById('spanInfo');

    document.querySelector('textarea').addEventListener('keydown', function(event) {
        // Regex para permitir apenas letras minúsculas, números e espaços
        let regex = /^[a-z0-9\s]$/;

        // Teclas permitidas (Backspace, Delete, Arrow keys, etc.)
        let allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab', 'Enter', 'Shift', 'Control', 'Alt', 'Escape', 'CapsLock'];

        if (!event.key.match(regex) && !allowedKeys.includes(event.key)) {
            event.preventDefault();
            spanInfo.style.color = 'red';
            buttonCripto.style.opacity= 0.5;
            buttonCripto.disabled = true;
            buttonDecripto.style.opacity= 0.5;
            buttonDecripto.disabled = true;
        } else {
            spanInfo.style.color = 'white';
            buttonCripto.style.opacity= 1;
            buttonCripto.disabled = false;
            buttonDecripto.style.opacity= 1;
            buttonDecripto.disabled = false;
        }
    });
}



