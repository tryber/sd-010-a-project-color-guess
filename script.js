const selectBalls = document.getElementsByClassName('ball');
const selectAnswer = document.querySelector('#answer');

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

function game(event) {
  const evento = event.target;
  if (evento.id === 'true') {
    selectAnswer.innerHTML = 'Acertou!';
  } else {
    selectAnswer.innerHTML = 'Errou! Tente novamente!';
  }
}

for (let index = 0; index < selectBalls.length; index += 1) {
  selectBalls[index].addEventListener('click', game);
}
