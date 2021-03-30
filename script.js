let score = 0;

function getRandomRgbColor() {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;

  return `rgb(${red.toFixed()}, ${green.toFixed()}, ${blue.toFixed()})`;
}

function addRandomBalls() {
  const balls = document.getElementsByClassName('ball');

  for (let index = 0; index < balls.length; index += 1) {
    const backgroundColor = getRandomRgbColor();
    balls[index].style.backgroundColor = backgroundColor;
  }
}

function addscore() {
  const scoreElement = document.getElementById('score');
  score += 3;

  scoreElement.innerHTML = score;
}

function checkGuessColor() {
  const balls = document.getElementsByClassName('ball');
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].onclick = () => {
      const color = document.getElementById('rgb-color').innerHTML;
      const { backgroundColor } = balls[index].style;
      const answer = document.getElementById('answer');

      if (color === backgroundColor) {
        answer.innerHTML = 'Acertou!';
        addscore();
      } else {
        answer.innerHTML = 'Errou! Tente novamente!';
      }
    };
  }
}

function getRandomRgbNumber() {
  const randomNumber = Number((Math.random() * 5).toFixed());
  const balls = document.getElementsByClassName('ball');
  const rgbColorElement = document.getElementById('rgb-color');

  for (let index = 0; index < balls.length; index += 1) {
    if (index === randomNumber) {
      rgbColorElement.innerHTML = balls[index].style.backgroundColor;
    }
  }
}

window.onload = () => {
  addRandomBalls();
  checkGuessColor();
  getRandomRgbNumber();

  const resetButtonElement = document.getElementById('reset-game');

  resetButtonElement.onclick = () => {
    addRandomBalls();
    getRandomRgbNumber();

    const answer = document.getElementById('answer');
    answer.innerHTML = 'Escolha uma cor';
  };
};
