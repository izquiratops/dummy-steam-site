import Toast from './toast';
import './style.css';

const toastMessages = [
    'Gordon Freeman has logged in',
    'Alyx Vance is playing Counter Strike',
    'Barney has disconnected',
]

function showRandomToast() {
    const idx = Math.floor(Math.random() * toastMessages.length);
    const message = toastMessages[idx];
    Toast(message);
}

function initialize() {
    const loginBtn = document.getElementById('help-btn');
    loginBtn?.addEventListener('click', showRandomToast);
}

window.addEventListener(('load'), initialize)
