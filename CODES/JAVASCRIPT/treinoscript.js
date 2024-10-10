let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const carouselInner = document.querySelector('.carousel-inner');

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Eventos para os botões de navegação
document.querySelector('.carousel-button.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems; // Move para o próximo item
    updateCarousel();
});

document.querySelector('.carousel-button.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move para o item anterior
    updateCarousel();
});



// Para permitir a navegação através das teclas de seta do teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveSlide(1); // Move para a direita
    } else if (event.key === 'ArrowLeft') {
        moveSlide(-1); // Move para a esquerda
    }
});

