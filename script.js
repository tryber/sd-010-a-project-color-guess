const colorGuess = document.getElementById('rgb-color');
const circles = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const ballsGroup = document.getElementById('balls-container');
const btnReset = document.getElementById('reset-game');

window.onload = () => {
  answer.innerHTML = 'Escolha uma cor';
};

function generateRgbColor() {
  const rgb1 = Math.floor(Math.random() * 255 + 1);
  const rgb2 = Math.floor(Math.random() * 255 + 1);
  const rgb3 = Math.floor(Math.random() * 255 + 1);
  return `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
}

colorGuess.innerHTML = generateRgbColor();

function setColorCircles() {
  for (let i = 0; i < circles.length; i += 1) {
    circles[i].style.backgroundColor = generateRgbColor();
  }
  const correctBall = Math.floor(Math.random() * 6);
  circles[correctBall].style.backgroundColor = colorGuess.innerHTML;
}

function checkColor() {
  ballsGroup.addEventListener('click', (e) => {
    const ball = e.target;
    if (ball.style.backgroundColor === colorGuess.innerHTML) {
      answer.innerHTML = 'Acertou!';
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  });
}

function resetGame() {
  btnReset.addEventListener('click', () => {
    colorGuess.innerHTML = generateRgbColor();
    setColorCircles();
    answer.innerHTML = 'Escolha uma cor';
  });
}

setColorCircles();
resetGame();
checkColor();
