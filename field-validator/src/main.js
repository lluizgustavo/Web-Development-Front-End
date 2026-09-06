import '../src/style.css';
import validator from 'validator'

const button = document.querySelector('button')
const input = document.querySelector('input')
const select = document.querySelector('select')
const h4 = document.querySelector('h4')

button.addEventListener('click', (event) => {
    event.preventDefault();
    const fields = {
        email: validator.isEmail(input.value),
        cpf: validator.isTaxID(input.value, 'pt-BR'),
        hexColor: validator.isHexColor(input.value),
        uuid: validator.isUUID(input.value, 4),
        url: validator.isURL(input.value),
    };

    h4.innerHTML = `The validations returns ${fields[select.value]}`;
});
