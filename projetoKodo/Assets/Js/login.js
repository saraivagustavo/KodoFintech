import { styleLoginCheckbox, handleHeaderScroll } from './utilites.js';

// --- Login ---
const checkboxLogin = document.querySelector('[data-checkbox-login]');
if (checkboxLogin) {
    checkboxLogin.addEventListener('click', styleLoginCheckbox);
}

// --- Adiciona o evento de rolagem para o header na página de login ---
window.addEventListener('scroll', handleHeaderScroll);