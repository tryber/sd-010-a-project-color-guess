const random = `(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},`
  + ` ${Math.floor(Math.random() * 255)})`;
const rgbColorId = '#rgb-color';

function generateTextRGB() {
  const rgbText = document.querySelector('#rgb-color');
  rgbText.innerText = random;
}

function generateColors() {
  const ballsList = document.querySelectorAll('.ball');
  const indexRandom = Math.floor(Math.random() * 5);
  for (let i = 0; i < ballsList.length; i += 1) {
    if (ballsList[i] !== ballsList[indexRandom]) {
      ballsList[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255},`
        + `${Math.random() * 255})`;
    } else {
      ballsList[indexRandom].style.backgroundColor = `rgb${document.querySelector(rgbColorId)
        .innerText}`;
    }
  }
}

function challenger() {
  const ballsContainer = document.querySelector('.balls');
  const answer = document.getElementById('answer');

  ballsContainer.addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === `rgb${document.querySelector(rgbColorId)
      .innerText}`) {
      answer.innerText = 'Acertou!';
      score();
      generateTextRGB();
      generateColors();
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  });
}

function initGame() {
  const buttonInit = document.querySelector('#reset-game');

  buttonInit.addEventListener('click', () => {
    location.reload();
  });
}

function score() {
  const scoreTextElement = document.getElementById('score');
  let scoreText = parseInt(scoreTextElement.innerText);
  scoreText += 3;
  scoreTextElement.innerText = scoreText;
}

window.onload = () => {
  initGame();
  generateTextRGB();
  generateColors();
  challenger();
};
