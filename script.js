// Gerando cor aleatória
const rgbColor = document.querySelector('#rgb-color');

function generatesRandomRgb() {
  const randomColor = `(${Math.ceil(Math.random() * 254)}, ${Math.ceil(
    Math.random() * 254
  )}, ${Math.ceil(Math.random() * 254)})`;

  return randomColor;
}

// Gerar cores aleatórias dos círculos
const balls = document.querySelectorAll('.ball');

function generateBallsColor() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = `rgb${generatesRandomRgb()}`;
  }
}

generateBallsColor();

// Clicar no botão e verificar se a resposta está correta
const answer = document.querySelector('#answer');

function chooseRightColor(event) {
  for (let i = 0; i < balls.length; i += 1) {
    const eventBackground = rgbColor.innerText;
    if (event.target.style.backgroundColor.includes(eventBackground)) {
      answer.innerText = 'Acertou!';
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  }
}

for (let i = 0; i < balls.length; i += 1) {
  balls[i].addEventListener('click', chooseRightColor);
}

// Gerando cor a ser adivinhada aleatóriamente
function generateRgbColor () {
  rgbColor.innerText = generatesRandomRgb();

  return rgbColor.innerText;
}
generateRgbColor ()

// Aplicando essa cor em alguma bola aleatória
let randomBall = 0;

function randomNumber () {
  randomBall = parseInt(Math.random() * 6, 10)
}

function applyAnswer() {
  balls[randomBall].style.backgroundColor = `rgb${rgbColor.innerText}`;
}

window.onload = applyAnswer;

// Botão de resetar o jogo
const reset = document.querySelector('#reset-game')

function resetGame (event) {
  generateBallsColor();
  chooseRightColor(event);
  generateRgbColor ();
  randomNumber ();
  applyAnswer();

  answer.innerText = "Escolha uma cor"
}

reset.addEventListener('click', resetGame)