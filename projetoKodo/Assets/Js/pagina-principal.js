import { toggleElementVisibility, handleHeaderScroll } from './utilites.js';

// --- Botão Saiba Mais ---
const saibaMaisModal = document.querySelector('[data-overlay-saiba-mais]');
const abrirSaibaMaisBtn = document.querySelector('[data-saiba-mais]');
const fecharSaibaMaisBtn = document.querySelector('[data-fechar-modal]');

if (saibaMaisModal && abrirSaibaMaisBtn && fecharSaibaMaisBtn) {
    abrirSaibaMaisBtn.addEventListener('click', () => toggleElementVisibility(saibaMaisModal, 'open'));
    fecharSaibaMaisBtn.addEventListener('click', () => toggleElementVisibility(saibaMaisModal, 'close'));
}

// --- Botão Assistir' ---
const videosModal = document.querySelector('[data-videos]');
const abrirVideosBtn = document.querySelector('[data-assistir-button-aciona]');
const fecharVideosBtn = document.querySelector('[data-fechar-assistir]');

if (videosModal && abrirVideosBtn && fecharVideosBtn) {
    abrirVideosBtn.addEventListener('click', () => toggleElementVisibility(videosModal, 'open'));
    fecharVideosBtn.addEventListener('click', () => toggleElementVisibility(videosModal, 'close'));
}

// --- Adiciona o evento de rolagem para o header na página principal ---
window.addEventListener('scroll', handleHeaderScroll);