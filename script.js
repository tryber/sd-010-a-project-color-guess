const selectBalls = document.getElementsByClassName('ball');
const selectAnswer = document.querySelector('#answer');
const selectRgb = document.querySelector('#rgb-color');
const selectButton = document.querySelector('#reset-game');
const selectScore = document.querySelector('#score');

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

function game(event) { // consultado uso de regex em: https://pt.stackoverflow.com/questions/92981/express%C3%A3o-regular-para-aceitar-apenas-n%C3%BAmeros-e-uma
  const evento = event.target;
  let points = 3;
  const getpoints = localStorage.getItem('score');
  points += parseInt(getpoints, 10);
  if (evento.id === 'true') {
    selectAnswer.innerHTML = 'Acertou!';
    const text = selectScore.innerHTML.replace(/\d+/g, points);
    selectScore.innerHTML = text;
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
