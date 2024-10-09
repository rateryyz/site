document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;

    document.getElementById(
      "message"
    ).innerHTML = `<p>Usuário ${name} cadastrado com sucesso!</p>`;
  
    
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    document.getElementById("message").innerHTML = `<p>Carregando...</p>`;

    setTimeout(() => {
      document.getElementById(
        "message"
      ).innerHTML = `<p>Usuário ${username} logado com sucesso!</p>`;

      setTimeout(() => {
        window.location.href = "/meu_projeto_dieta/index/index.html";
      }, 2000);
    }, 4000);
  });

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");

    // para o backend para verificar o login
    if (name === "usuario" && password === "senha") {
      messageDiv.textContent = "Login realizado com sucesso!";
      messageDiv.style.color = "green";
      setTimeout(() => {
        window.location.href = "/meu_projeto_dieta/index/index.html"; //
      }, 2000);
    } else {
      messageDiv.textContent = "Nome ou senha incorretos!";
      messageDiv.style.color = "red";
    }
  });
