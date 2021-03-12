function randomColors() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  return `(${r}, ${g}, ${b})`;
}

const colorsBall = document.getElementsByClassName('ball');
function generateRandomColors() {
  for (let key = 0; key < colorsBall.length; key += 1) {
    colorsBall[key].style.backgroundColor = `rgb${randomColors()}`;
  }
}

// Para cumprir requisito 2

function rgbColorGuess() {
  const rgbColor = document.getElementById('rgb-color');
  rgbColor.textContent = `${randomColors()}`;
  return rgbColor;
}

const answer = document.getElementById('answer');
function answerInitialState() {
  answer.innerText = 'Escolha uma cor';
  return answer;
}

const resetGame = document.querySelector('#reset-game');
resetGame.addEventListener('click', answerInitialState);
resetGame.addEventListener('click', generateRandomColors);
resetGame.addEventListener('click', rgbColorGuess);

window.onload = function initialize() {
  generateRandomColors();
  answerInitialState();
};

const colorOne = document.getElementsByClassName('ball')[0];
const colorTwo = document.getElementsByClassName('ball')[1];
const colorThree = document.getElementsByClassName('ball')[2];
const colorFour = document.getElementsByClassName('ball')[3];
const colorFive = document.getElementsByClassName('ball')[4];
const colorSix = document.getElementsByClassName('ball')[5];

function colorOneSelected() {
  if (colorOne.classList.contains('selected')) {
    colorTwo.classList.remove('selected');
    colorThree.classList.remove('selected');
    colorFour.classList.remove('selected');
    colorFive.classList.remove('selected');
    colorSix.classList.remove('selected');
  }
}
function colorTwoSelected() {
  if (colorTwo.classList.contains('selected')) {
    colorOne.classList.remove('selected');
    colorThree.classList.remove('selected');
    colorFour.classList.remove('selected');
    colorFive.classList.remove('selected');
    colorSix.classList.remove('selected');
  }
}

function colorThreeSelected() {
  if (colorThree.classList.contains('selected')) {
    colorOne.classList.remove('selected');
    colorTwo.classList.remove('selected');
    colorFour.classList.remove('selected');
    colorFive.classList.remove('selected');
    colorSix.classList.remove('selected');
  }
}

function colorFourSelected() {
  if (colorFour.classList.contains('selected')) {
    colorOne.classList.remove('selected');
    colorTwo.classList.remove('selected');
    colorThree.classList.remove('selected');
    colorFive.classList.remove('selected');
    colorSix.classList.remove('selected');
  }
}
function colorFiveSelected() {
  if (colorFive.classList.contains('selected')) {
    colorOne.classList.remove('selected');
    colorTwo.classList.remove('selected');
    colorThree.classList.remove('selected');
    colorFour.classList.remove('selected');
    colorSix.classList.remove('selected');
  }
}
function colorSixSelected() {
  if (colorSix.classList.contains('selected')) {
    colorOne.classList.remove('selected');
    colorTwo.classList.remove('selected');
    colorThree.classList.remove('selected');
    colorFour.classList.remove('selected');
    colorFive.classList.remove('selected');
  }
}

function colorOneSelection() {
  colorOne.classList.add('selected');
  colorOneSelected();
}
colorOne.addEventListener('click', colorOneSelection);

function colorTwoSelection() {
  colorTwo.classList.add('selected');
  colorTwoSelected();
}
colorTwo.addEventListener('click', colorTwoSelection);

function colorThreeSelection() {
  colorThree.classList.add('selected');
  colorThreeSelected();
}
colorThree.addEventListener('click', colorThreeSelection);

function colorFourSelection() {
  colorFour.classList.add('selected');
  colorFourSelected();
}
colorFour.addEventListener('click', colorFourSelection);

function colorFiveSelection() {
  colorFive.classList.add('selected');
  colorFiveSelected();
}
colorFive.addEventListener('click', colorFiveSelection);

function colorSixSelection() {
  colorSix.classList.add('selected');
  colorSixSelected();
}
colorSix.addEventListener('click', colorSixSelection);

function score() {
  const challengerScore = document.getElementById('score');
  let scoreCount = 0;
  scoreCount = parseInt(challengerScore.innerText, 10);
  scoreCount += 3;
  challengerScore.innerText = scoreCount;
  if (typeof Storage !== 'undefined') {
    challengerScore.innerText = localStorage.challengerScore;
  }
}

for (let key = 0; key < colorsBall.length; key += 1) {
  colorsBall[key].addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === `rgb${rgbColorGuess}`) {
      answer.innerText = 'Acertou!';
      score();
      rgbColorGuess();
      generateRandomColors();
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  });
}

/* function saveMyScore() {
  localStorage.myListOfTasks = myListOfTasks.innerHTML;
}
const btnSaveMyTasks = document.getElementById('salvar-tarefas');

if (typeof Storage !== 'undefined' && localStorage.myListOfTasks) {
  myListOfTasks.innerHTML = localStorage.myListOfTasks;
}
btnSaveMyTasks.addEventListener('click', saveMyTasks); */

// score usar armazenamento no localStorage;
// usar incremento de 3 pontos para cada acerto;
// uma regra para associar o valor que aparece, com o clicado.
