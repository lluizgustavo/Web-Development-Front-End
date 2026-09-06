import { nanoid } from "nanoid";
import './style.css'

const button = document.querySelector('button')
const h2 = document.querySelector('h2')

button.addEventListener('click', () => {
    h2.innerHTML = nanoid()
});
