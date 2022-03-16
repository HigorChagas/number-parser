const btnAdicionar = document.querySelector('#adicionar');

btnAdicionar.addEventListener('click', () => {
    const inputNumero = document.querySelector('.input-numero');
    const select = document.querySelector('#resultado');
    const numero = Number(inputNumero.value);

    const valorMaiorOuMenor = numero > 100 || numero < 1;

    const numeros = [];
    numeros

    if(valorMaiorOuMenor || !numero) {  
        alert('Valor inválido ou já encontrado na lista');
    } else {
        
        let existe = false;

        for(let posicao = 0; posicao < numeros.length; posicao++) {
            if(numeros[posicao] === numeros) {
                existe = true;
                break;
            }
        }

        if(existe === false) {
            let item = document.createElement('option');
            numeros.push(numero);
            item.text = numeros;
            select.appendChild(item);
        }
        
    }
});