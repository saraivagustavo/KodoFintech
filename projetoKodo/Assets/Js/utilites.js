// Função genérica para abrir e fechar elementos como modais
export const toggleElementVisibility = (element, action) => {
    if (element) {
        if (action === 'open') {
            element.style.display = 'flex';
        } else if (action === 'close') {
            element.style.display = 'none';
        }
    }
};

// Função para o efeito de rolagem no header
export const handleHeaderScroll = () => {
    const header = document.querySelector('[data-header]');
    if (header) {
        if (window.scrollY > 10) {
            header.classList.add('rolagem');
        } else {
            header.classList.remove('rolagem');
        }
    }
};

// Função para o estilo do checkbox de login
export const styleLoginCheckbox = () => {
    const checkboxLogin = document.querySelector('[data-checkbox-login]');
    if (checkboxLogin) {
        const checkTextLogin = checkboxLogin.nextElementSibling;
        checkTextLogin.style.fontWeight = checkboxLogin.checked ? '600' : '';
    }
};