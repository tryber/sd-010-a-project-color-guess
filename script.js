const rgbColor = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const resetBtn = document.getElementById('reset-game');

function randomRGB() {
  return Math.floor(Math.random() * 255);
}

function initializeGame() {
  answer.innerText = 'Escolha uma cor';
  const colorToBeGuessed = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
  rgbColor.innerText = colorToBeGuessed;

  for (const ball of balls) {
    ball.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
    ball.addEventListener('click', (evt) => {
      if (evt.target.style.backgroundColor === colorToBeGuessed) {
        answer.innerText = 'Acertou!';
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    });
  }
  // replace one random ball with colorToBeGuessed
  const randomPosition = Math.floor(Math.random() * 6);
  balls[randomPosition].style.backgroundColor = colorToBeGuessed;
}

resetBtn.addEventListener('click', () => {
  initializeGame();
});

window.onload = () => {
  initializeGame();
};
