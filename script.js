function makeColorCircles() {
  const getCircle = document.querySelectorAll('.ball');
  for (let index = 0; index < getCircle.length; index += 1) {
    const colorArray = [
      Math.ceil(Math.random() * 257),
      Math.ceil(Math.random() * 257),
      Math.ceil(Math.random() * 257)];
    const correctColor = colorArray.join(', ');
    const rgbFormat = `rgb(${correctColor})`;
    getCircle[index].style.backgroundColor = rgbFormat;
  }
}

function sortAnswer() {
  const randomChoice = Math.ceil(Math.random() * 6) - 1;
  const getCircle = document.querySelectorAll('.ball');
  getCircle[randomChoice].setAttribute('id', 'correct');
  const rgbAnswer = window.getComputedStyle(getCircle[randomChoice])
    .getPropertyValue('background-color');
  document.getElementById('rgb-color').innerText = rgbAnswer;
}

function increaseScore() {
  let currentScore = document.getElementById('score').innerHTML;
  currentScore = parseInt(currentScore, 10);
  if (document.getElementById('answer').innerText === 'Acertou!') {
    document.getElementById('score').innerHTML = currentScore + 3;
    console.log(currentScore);
  }
}
function testShot() {
  const getCircle = document.querySelectorAll('.ball');
  for (let index = 0; index < getCircle.length; index += 1) {
    getCircle[index].addEventListener('click', (event) => {
      const shot = window.getComputedStyle(event.target).getPropertyValue('background-color');
      if (shot === document.getElementById('rgb-color').innerText) {
        document.getElementById('answer').innerText = 'Acertou!';
        increaseScore();
      } else {
        document.getElementById('answer').innerText = 'Errou! Tente novamente!!';
      }
    });
  }
}

function resetGame() {
  const getBtn = document.getElementById('reset-game');
  getBtn.addEventListener('click', () => {
    document.getElementById('answer').innerText = 'Escolha uma cor';
    makeColorCircles();
    sortAnswer();
  });
}

window.onload = () => {
  makeColorCircles();
  sortAnswer();
  testShot();
  resetGame();
};
