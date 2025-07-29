/**
Script responsável por carregar componentes HTML reutilizáveis nas páginas principais.
 */

// Função que carrega o conteúdo de uma URL em um elemento do DOM
const loadComponent = (url, elementId) => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar o componente: ${response.statusText}`);
            }
            return response.text(); // Converte a resposta em texto (HTML)
        })
        .then(html => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = html;
            }
        })
        .catch(error => {
            console.error(`Falha ao carregar o componente de ${url}:`, error);
        });
};

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('/components/header.html', 'main-header');
    
    loadComponent('/components/footer.html', 'footer');
});