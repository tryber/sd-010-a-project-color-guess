const selectBalls = document.getElementsByClassName('ball');
const selectAnswer = document.querySelector('#answer');
const selectRgb = document.querySelector('#rgb-color');
const selectButton = document.querySelector('#reset-game');
const selectScore = document.querySelector('#score');
// localStorage.setItem('score', points);

let points = 0;
if (localStorage.getItem('score')) {
  const getpoints = localStorage.getItem('score');
  points += parseInt(getpoints, 10);
} else {
  points = 0;
  localStorage.setItem('score', points);
}
selectScore.innerHTML = points;
function generateRandomColors() {
  for (let index = 0; index < selectBalls.length; index += 1) {
    selectBalls[index].style.backgroundColor = `rgb(${Math.random() * 255}
    , ${Math.random() * 255}, ${Math.random() * 255})`;
    selectBalls[index].style.width = '150px';
    selectBalls[index].style.height = '150px';
  }
}
generateRandomColors();

function trueColor() {
  const ball = Math.floor(Math.random() * 6);
  selectBalls[ball].id = 'true';
}

trueColor();

function whatIsTheTrueColor() {
  for (let index = 0; index < selectBalls.length; index += 1) {
    if (selectBalls[index].id === 'true') {
      selectRgb.innerText = selectBalls[index].style.backgroundColor;
    }
  }
}
whatIsTheTrueColor();

function game(event) {
  const evento = event.target;
  if (evento.id === 'true') {
    selectAnswer.innerHTML = 'Acertou!';
    points += 3;
    selectScore.innerHTML = points;
    localStorage.setItem('score', points);
  } else {
    selectAnswer.innerHTML = 'Errou! Tente novamente!';
  }
}

// Consultado uso da função .reload em: https://www.w3schools.com/jsref/met_loc_reload.asp
function resetGame() {
  window.location.reload();
}

for (let index = 0; index < selectBalls.length; index += 1) {
  selectBalls[index].addEventListener('click', game);
}
selectButton.addEventListener('click', resetGame);
