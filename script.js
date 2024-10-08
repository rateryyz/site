// Aguarda o carregamento completo do DOM antes de adicionar os eventos
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("imcForm");
  const resultadoIMC = document.getElementById("imcResultado");

  // Adiciona o evento de submissão do formulário
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário e o recarregamento da página

    // Captura os valores inseridos pelo usuário
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    // Verifica se os valores são válidos
    if (isNaN(altura) || isNaN(peso)) {
      resultadoIMC.textContent =
        "Por favor, insira valores válidos para altura e peso.";
      return;
    }

    // Calcula o IMC
    const imc = (peso / (altura * altura)).toFixed(2);

    // Exibe o resultado na página
    resultadoIMC.textContent = `Seu IMC é: ${imc}`;
  });
});

// script.js
let currentSlide = 0; // Inicializa o índice do slide atual

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-images img"); // Seleciona todas as imagens
  currentSlide = (index + slides.length) % slides.length; // Calcula o índice do slide atual
  const offset = -currentSlide * 100; // Calcula o deslocamento baseado no índice
  document.querySelector(
    ".carousel-images"
  ).style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
}

function nextSlide() {
  showSlide(currentSlide + 1); // Avança para o próximo slide
}

function prevSlide() {
  showSlide(currentSlide - 1); // Volta para o slide anterior
}

// Função para ativar o menu hamburguer
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active"); // Alterna a classe active no menu
}
