import Toast from './toast';

const toastMessages = [
    'Gordon Freeman has logged in',
    'Alyx Vance is playing Counter Strike',
    'Barney has disconnected',
]

function init() {
    const loginBtn = document.getElementById('login-btn');
    loginBtn?.addEventListener('click', showRandomToast);
}

function showRandomToast() {
    const idx = Math.floor(Math.random() * 3);
    const message = toastMessages[idx];
    Toast(message);
}

init();