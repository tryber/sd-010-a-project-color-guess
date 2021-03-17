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
    balls[i].style.backgroundColor = 'rgb' + generatesRandomRgb();
  }
}

generateBallsColor();

// Clicar no botão e verificar se a resposta está correta
const answer = document.querySelector('#answer');

function chooseRightColor(event) {
  for (let i = 0; i < balls.length; i += 1) {
    let eventBackground = rgbColor.innerText;
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
rgbColor.innerText = generatesRandomRgb();

// Aplicando essa cor em alguma bola aleatória
const randomBall = parseInt(Math.random() * 6);

function applyAnswer() {
  balls[randomBall].style.backgroundColor = 'rgb' + rgbColor.innerText;
}

window.onload = applyAnswer;
