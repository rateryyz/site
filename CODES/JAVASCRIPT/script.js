let currentSlide = 0; 

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-images img"); 
  currentSlide = (index + slides.length) % slides.length; 
  const offset = -currentSlide * 100; 
  document.querySelector(
    ".carousel-images"
  ).style.transform = `translateX(${offset}%)`; 
}

function nextSlide() {
  showSlide(currentSlide + 1); 
}

function prevSlide() {
  showSlide(currentSlide - 1); 
}

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active"); a
}
