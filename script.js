const ballsContainer = document.querySelector('.ball-container');
const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const resetGameBtn = document.getElementById('reset-game');

const GenerateColorBall = () => {
  const colorRgbNumbers = [];

  for (let index = 1; index <= 3; index += 1) {
    const numberRgb = Math.floor(Math.random() * 255) + 1;
    colorRgbNumbers.push(numberRgb);
  }

  const colorRgb = `rgb(${colorRgbNumbers[0]}, ${colorRgbNumbers[1]}, ${colorRgbNumbers[2]})`;
  return colorRgb;
};

const ApplyColorBall = () => {
  balls.forEach((ball) => {
    const color = GenerateColorBall();
    const currentBall = ball;
    currentBall.style.cssText = `background-color: ${color}`;
  });
};

ApplyColorBall();

let points = 0;
const scores = (number) => {
  const score = document.getElementById('score');
  points += number;
  score.textContent = `Placar: ${points}`;
};

scores(0);

const testAnswer = (event) => {
  const element = event.target;
  const rgbColor = document.getElementById('rgb-color');
  const bgColorCircle = element.style.backgroundColor;
  const bgColorCircleOnlyNumbers = bgColorCircle.slice(3, bgColorCircle.length);
  if (event.target.classList.contains('ball')) {
    console.log(rgbColor.textContent, bgColorCircleOnlyNumbers);
    if (rgbColor.textContent === bgColorCircleOnlyNumbers) {
      answer.textContent = 'Acertou!';
      scores(3);
    } else {
      answer.textContent = 'Errou! Tente novamente!';
    }
  }
};

ballsContainer.addEventListener('click', testAnswer);

const resetGame = () => {
  answer.textContent = 'Escolha uma cor';
  ApplyColorBall();
  const index = Math.floor(Math.random() * 6);
  const rgbCicle = balls[index].style.backgroundColor;
  const rgbCicleOnlyNumbers = rgbCicle.slice(3, rgbCicle.length);
  const rgbColor = document.getElementById('rgb-color');
  rgbColor.textContent = rgbCicleOnlyNumbers;
};

resetGameBtn.addEventListener('click', resetGame);

resetGame();
