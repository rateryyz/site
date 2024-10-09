document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("imcForm");
    const resultadoIMC = document.getElementById("imcResultado");
    const loading = document.getElementById("loading");
  
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        loading.style.display = "flex";
        resultadoIMC.textContent = "";
        
        setTimeout(() => {
            const alturaCm = parseFloat(document.getElementById("altura").value);
            const peso = parseFloat(document.getElementById("peso").value);
  
            if (isNaN(alturaCm) || isNaN(peso)) {
                resultadoIMC.textContent = "Por favor, insira valores válidos para altura e peso.";
                loading.style.display = "none";
                return;
            }
            const alturaM = alturaCm / 100;
            const imc = (peso / (alturaM * alturaM)).toFixed(2);
            resultadoIMC.textContent = `Seu IMC é: ${imc}`;
            loading.style.display = "none";
        }, 2000);
    });
  });