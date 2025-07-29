// Objeto para armazenar os elementos e suas respectivas posições de ativação
const elementosParaAnimar = {
    '[data-oferecimentos-clientes]': 60,
    '[data-iniciativa]': 340,
    '[data-controle-financeiro-component]': 770,
    '[data-videos-assistir]': 1190,
    '[data-faq-section]': 1710,
    '[data-card-faq-1]': 1770,
    '[data-card-faq-2]': 1840,
    '[data-card-faq-3]': 1890,
    '[data-card-faq-4]': 1940,
    '[data-section-cadastrar-chamada]': 2400,
    '[data-footer]': 2900
};

// Função única para o efeito de scroll
const scrollEffect = () => {
    const posicaoScroll = window.scrollY;

    for (const seletor in elementosParaAnimar) {
        const elemento = document.querySelector(seletor);
        if (elemento) { // Verifica se o elemento existe na página
            const posicaoAtivacao = elementosParaAnimar[seletor];

            if (posicaoScroll > posicaoAtivacao) {
                elemento.classList.add('visivel-scroll');
                elemento.classList.remove('invisivel-scroll');
            } else {
                elemento.classList.add('invisivel-scroll');
                elemento.classList.remove('visivel-scroll');
            }
        }
    }
};

window.addEventListener('scroll', scrollEffect);

scrollEffect();