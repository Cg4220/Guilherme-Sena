// Smooth Scroll para os links da navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mensagem de boas vindas no console (opcional)
console.log("Landing Page do Guilherme carregada com sucesso!");
// ==========================================
// Lógica do Slideshow Automático do Hero
// ==========================================

function startHeroSlider() {
    // Seleciona todos os elementos com a classe 'slide' dentro de '.hero-slider'
    const slides = document.querySelectorAll('.hero-slider .slide');
    
    // Verifica se existem slides para evitar erros
    if (slides.length === 0) return;

    let currentSlideIndex = 0;
    const slideInterval = 5000; // Tempo em milissegundos (5 segundos)

    function nextSlide() {
        // 1. Remove a classe 'active' do slide atual
        slides[currentSlideIndex].classList.remove('active');

        // 2. Calcula o índice do próximo slide (volta ao 0 se for o último)
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;

        // 3. Adiciona a classe 'active' ao novo slide
        slides[currentSlideIndex].classList.add('active');
    }

    // Define o intervalo para chamar a função nextSlide automaticamente
    setInterval(nextSlide, slideInterval);
}

// Inicia o slider assim que a página carregar
window.addEventListener('load', startHeroSlider);
// Funcionalidade do Menu Hambúrguer (Mobile)
const menuToggle = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-list');
const navLinks = document.querySelectorAll('#nav-list li a');

// Abre/Fecha a gaveta de links ao clicar no ícone
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Fecha o menu automaticamente quando o cliente clica em qualquer link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});