const btnAdicionar = document.querySelector('#adicionar');
const btnFinalizar = document.querySelector('#finalizar');
const resultado = document.querySelector('.resultado');

const numeros = [];

btnAdicionar.addEventListener('click', () => {
    const inputNumero = document.querySelector('.input-numero');
    const select = document.querySelector('#resultado');
    const numero = Number(inputNumero.value);
    
    const numeroExiste = numeros.includes(numero, 0)
    const valorMaiorOuMenor = numero > 100 || numero < 1;

    if(valorMaiorOuMenor || !numero || numeroExiste) {  
        alert('Valor inválido ou já adicionado na lista.');
    } else {
        numeros.push(numero);
        let item = document.createElement('option');
        item.text += `Valor ${numero} foi adicionado.`;
        select.appendChild(item);
    }
});

btnFinalizar.addEventListener('click', () => {
    const maiorNumero = Math.max(...numeros);
    const menorNumero = Math.min(...numeros); 
    const soma = numeros.reduce(function(acumulador, valor) {
        acumulador += valor;
        return acumulador;
    }, 0);
     const media = soma / numeros.length

    resultado.innerHTML = `No total temos ${numeros.length} números cadastrados.<br>
    O maior número cadastrado é ${maiorNumero}<br>
    O menor número cadastrado é ${menorNumero}<br>
    Somando todos os valores, temos ${soma}<br>
    A média dos números é ${media.toFixed(2)}`;

});
