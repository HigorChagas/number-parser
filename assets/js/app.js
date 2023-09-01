const addBtn = document.querySelector('#btnAdd');
const endBtn = document.querySelector('#btnEnd');
const result = document.querySelector('.result');

const numbers = [];

addBtn.addEventListener('click', () => {
    const numberInput = document.querySelector('.input-number');
    const inputSelect = document.querySelector('#result');
    const numberValue = Number(numberInput.value);

    const numberExists = numbers.includes(numberValue, 0);
    const greaterOrLess = numberValue > 100 || numberValue < 1;

    if (greaterOrLess || !numberValue || numberExists) {
        alert('Valor inválido ou já adicionado na lista.');
    } else {
        numbers.push(numberValue);
        let item = document.createElement('option');
        item.text += `Valor ${numberValue} foi adicionado.`;
        inputSelect.appendChild(item);
    }
});

endBtn.addEventListener('click', () => {
    const higherNumber = Math.max(...numbers);
    const smallerNumber = Math.min(...numbers);
    const sum = numbers.reduce((acc, value) => {
        acc += value;
        return acc;
    }, 0);
    const average = sum / numbers.length;

    result.innerHTML = `No total temos ${
        numbers.length
    } números cadastrados.<br>
    O maior número cadastrado é ${higherNumber}<br>
    O menor número cadastrado é ${smallerNumber}<br>
    sumndo todos os valores, temos ${sum}<br>
    A média dos números é ${average.toFixed(2)}`;
});
