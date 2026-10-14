// Parte 1: seleção dos elementos
const titulo = document.querySelector("#titulo");
const texto = document.querySelector("#texto");
const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

// Parte 2: interação
botao.addEventListener("click", function () {
  titulo.textContent = "Você clicou no botão!";
  texto.textContent = "O JavaScript alterou este parágrafo usando o DOM.";
  titulo.style.color = "#e11d48";
  mensagem.textContent = "Tudo certo! As alterações foram feitas com sucesso.";
});

// Desafio extra: modo escuro
const botaoModo = document.querySelector("#modo");

botaoModo.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
