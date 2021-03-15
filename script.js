// Esta página pode ser vista na url https://rogerio-lambert.github.io/javaScript-DOM/color-guess/color-guess.html
// Bloco de declaração de variáveis globais

const colors = document.getElementsByClassName('ball');
const color = document.getElementById('rgb-color');
const mensage = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const score = document.getElementById('score');
let selectedColor = document.querySelector('.ball');
let colorOfRound = 0;

// Bloco de declaração de funções.
function testGuess(event) {
  selectedColor = event.target;
  if (selectedColor === colors[colorOfRound]) {
    mensage.innerText = 'Acertou!';
    score.innerText = `${parseInt(score.innerText, 10) + 3}`;
  } else {
    mensage.innerText = 'Errou! Tente novamente!';
  }
}

function generateRgbColor() {
  const num = [];
  for (let index = 0; index < 3; index += 1) {
    num.push(Math.round(Math.random() * 255));
  }
  return `rgb(${num[0]}, ${num[1]}, ${num[2]})`;
}

function resetGame() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = generateRgbColor();
  }
  mensage.innerText = 'Escolha uma cor';
  colorOfRound = Math.round(Math.random() * (colors.length - 1));
  color.innerText = colors[colorOfRound].style.backgroundColor.slice(3, 18);
}

// Bloco de carregamento de escutadores de eventos

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', testGuess);
}
resetButton.addEventListener('click', resetGame);

// Bloco de ações de inicialização

resetGame();
