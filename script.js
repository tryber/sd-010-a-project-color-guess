function randomRgb() {
  const randomNumber = () => Math.floor(Math.random() * 256);
  const red = randomNumber();
  const green = randomNumber();
  const blue = randomNumber();

  return `(${red}, ${green}, ${blue})`;
}

function setRgbCode() {
  const rgbColor = document.querySelector('#rgb-color');
  const answer = document.querySelector('#answer');
  const rgbCode = randomRgb();
  rgbColor.innerText = rgbCode;
  answer.innerText = 'Escolha uma cor';
  localStorage.setItem('answer', rgbCode);
}

function updateScore() {
  const scoreElement = document.querySelector('#score');
  const score = Number(document.querySelector('#score').textContent);

  scoreElement.innerText = score + 3;
}

function isCorrect(event) {
  const e = event.target;
  const answer = `rgb${localStorage.getItem('answer')}`;
  const answerText = document.querySelector('#answer');

  if (answer === e.style.backgroundColor) {
    answerText.innerText = 'Acertou!';
    updateScore();
    setTimeout(() => alert('Parabéns!'), 500);
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
}

function createCircleBall(rgb) {
  const liBall = document.createElement('li');
  liBall.style.backgroundColor = `rgb${rgb}`;
  liBall.classList.add('ball');
  liBall.addEventListener('click', isCorrect);

  return liBall;
}

function setCircleBall() {
  const ballList = document.querySelector('#ball-list');
  const answer = localStorage.getItem('answer');
  const answerIndex = Math.floor(Math.random() * 6);
  const ballArray = new Array(6).fill(answer).map((ball, index) => {
    if (index === answerIndex) return ball;
    return randomRgb();
  });

  ballList.innerText = '';
  ballArray.forEach((rgb) => {
    ballList.appendChild(createCircleBall(rgb));
  });
}

function resetAll() {
  setRgbCode();
  setCircleBall();
}

function resetButton() {
  const button = document.querySelector('#reset-game');
  button.addEventListener('click', resetAll);
}

window.onload = () => {
  setRgbCode();
  setCircleBall();
  resetButton();
};
