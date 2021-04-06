const balls = document.querySelectorAll('.ball');
const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const resetBtn = document.getElementById('reset-game');
function randomRGBNumbers() {
  return Math.floor(Math.random() * 256);
}

function setColorToBalls() {
  balls.forEach((ball) => {
    const color1 = randomRGBNumbers();
    const color2 = randomRGBNumbers();
    const color3 = randomRGBNumbers();
    const color = `rgb(${color1}, ${color2}, ${color3})`;
    ball.style.backgroundColor = color;
  });
}

const guessColor = () => {
  const colorsArray = [];
  balls.forEach((ball) => colorsArray.push(ball.style.backgroundColor));
  rgbColor.innerText = colorsArray[Math.floor(Math.random() * (colorsArray.length))];
};

function rightColor() {
  const score = document.querySelector('#score span');
  score.innerText = parseInt(score.innerText, 0) + 3;
}
const answerTheColor = () => {
  balls.forEach((ball) => {
    ball.addEventListener('click', () => {
      const ballColor = ball.style.backgroundColor;
      const textRGB = rgbColor.innerText;
      const correct = 'Acertou!';
      const incorrect = 'Errou! Tente novamente!';
      if (ballColor === textRGB) {
        answer.innerText = correct;
        rightColor();
      } else {
        answer.innerText = incorrect;
      }
    });
  });
};

resetBtn.addEventListener('click', () => {
  setColorToBalls();
  guessColor();
  answer.innerText = 'Escolha uma cor';
});

window.onload = () => {
  setColorToBalls();
  guessColor();
  answerTheColor();
};
