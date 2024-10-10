let currentMuscleIndex = 0;

const muscles = ['Parte Clavicular (Superior)', 'Parte Esternal (Medial)', 'Parte Abdominal (Inferior)',];

function changeMuscle(direction) {
    currentMuscleIndex += direction;

    if (currentMuscleIndex < 0) {
        currentMuscleIndex = muscles.length - 1;
    } else if (currentMuscleIndex >= muscles.length) {
        currentMuscleIndex = 0;
    }

    updateCarousel();
}

function updateCarousel() {
    const selectedMuscle = muscles[currentMuscleIndex];
    document.getElementById('selected-muscle').innerText = selectedMuscle;

    const carouselItems = document.querySelectorAll('.carousel-item');
    const videoGrids = document.querySelectorAll('.video-grid');

    carouselItems.forEach((item, index) => {
        item.style.display = index === currentMuscleIndex ? 'block' : 'none';
    });

    videoGrids.forEach((grid, index) => {
        grid.style.display = index === currentMuscleIndex ? 'grid' : 'none';
    });
}

// Inicializar a página com o primeiro músculo
updateCarousel();
