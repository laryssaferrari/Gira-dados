// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Variável para armazenar o número de lados do dado
  var dieNum;

  // Seleciona o elemento com a classe 'die' e armazena-o em resultContainer
  var resultContainer = document.querySelector(".die");

  // Função que gera um número inteiro aleatório entre min e max (inclusive)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Função que simula o lançamento de um dado com 'num' lados
  function rollDie(num) {
    // Remove o primeiro caractere (presumivelmente "D") do número do dado
    num = num.substring(1);
    // Chama getRandomInt para obter um número aleatório com base no número de lados
    return getRandomInt(1, num);
  }

  // Para cada botão com a classe 'roll', adiciona um ouvinte de evento para o clique
  document.querySelectorAll(".roll").forEach(function (rollButton) {
    rollButton.addEventListener("click", function () {
      // Armazena o número do dado com base no texto do botão clicado
      dieNum = this.textContent;
      // Obtém o número de dados a serem lançados do elemento de entrada com ID 'numDice'
      var numDice = parseInt(document.getElementById("numDice").value, 10) || 1;
      // Garante que o número de dados não seja maior que 10
      numDice = Math.min(numDice, 10);
      // Array para armazenar os resultados dos lançamentos
      var results = [];

      // Loop para simular o lançamento de cada dado
      for (var i = 0; i < numDice; i++) {
        // Chama a função rollDie para obter um resultado e o adiciona ao array
        results.push(rollDie(dieNum));
      }

      // Chama a função para exibir os resultados no container
      displayResults(results);
    });
  });

  // Função para exibir os resultados no container
  function displayResults(results) {
    // Limpa qualquer conteúdo existente no container
    resultContainer.innerHTML = "";

    // Adiciona cada resultado como uma div com a classe 'dice' ao container
    results.forEach(function (result) {
      var resultElement = document.createElement("div");
      resultElement.textContent = result;
      resultElement.classList.add("dice"); // Adiciona a classe 'dice'
      resultContainer.appendChild(resultElement);
    });
  }
});
