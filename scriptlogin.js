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

    this.reset();

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

    // Exibir mensagem de carregamento
    document.getElementById("message").innerHTML = `<p>Carregando...</p>`;

    // Simular um atraso de 5 segundos para o efeito de carregamento
    setTimeout(() => {
      // Aqui você pode adicionar a lógica de verificação de login
      // Se o login for bem-sucedido, redirecionar para outra página
      // Exemplo: window.location.href = 'pagina_principal.html';

      document.getElementById(
        "message"
      ).innerHTML = `<p>Usuário ${username} logado com sucesso!</p>`;

      // Redirecionar após 2 segundos
      setTimeout(() => {
        window.location.href = "/meu_projeto_dieta/index.html"; // Substitua pela sua página de destino
      }, 2000);
    }, 4000); // Tempo de simulação do carregamento
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
        window.location.href = "/meu_projeto_dieta/index.html"; //
      }, 2000);
    } else {
      messageDiv.textContent = "Nome ou senha incorretos!";
      messageDiv.style.color = "red";
    }
  });
