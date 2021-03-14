const circles = document.querySelectorAll('.ball');
const optionsContainer = document.querySelector('#options-container');
const rightAnswerColor = document.querySelector('#rgb-color');
const answerText = document.querySelector('#answer-text');
const resetButton = document.querySelector('#reset-game');
const score = document.querySelector('#score');
let gameAnswer;
let scoreResult = 0;

function resetIds() {
  for (let index = 0; index < circles.length; index += 1) {
    circles[index].removeAttribute('id');
  }
}

function setScore() {
  score.innerText = `Placar: ${scoreResult}`;
}

function verifyAnwser() {
  const selectedAnwser = document.querySelector('#selectAnswer');
  if (selectedAnwser.style.backgroundColor === gameAnswer.style.backgroundColor) {
    answerText.innerText = 'Acertou!';
    scoreResult += 3;
    setScore();
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
}

function setRightAnswer() {
  const rightAnswer = circles[Math.floor((Math.random() * circles.length))];
  rightAnswerColor.innerHTML = rightAnswer.style.backgroundColor;
  gameAnswer = rightAnswer;
}

function chooseAnswer() {
  optionsContainer.addEventListener('click', (e) => {
    const answer = e.target;
    const answerLimiter = document.querySelector('#selectAnswer');
    if (answerLimiter === null && answer.classList.contains('ball')) {
      answer.id = 'selectAnswer';
      verifyAnwser();
    }
  });
}

function generateRandomColor() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;

  return rgb;
}

function setRandomColors() {
  for (let index = 0; index < circles.length; index += 1) {
    circles[index].style.backgroundColor = generateRandomColor();
  }
}

function resetGame() {
  chooseAnswer();
  setRandomColors();
  setRightAnswer();
  resetIds();
  answerText.innerText = '';
}

setScore();
resetButton.addEventListener('click', resetGame);
chooseAnswer();
setRandomColors();
setRightAnswer();
