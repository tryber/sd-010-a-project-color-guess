const rgbColor = document.querySelector('#rgb-color');
const colorOptions = document.querySelector('#color-options');
const answer = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');
let counter = 0;
const showCounter = document.querySelector('#score');
const counterSection = document.querySelector('#counter-section');

const color = () => Math.ceil(Math.random() * 255);

function showColor() {
  rgbColor.innerHTML = `(${color()}, ${color()}, ${color()})`;
  // console.log(rgbColor.innerText);
}

function generateRandomAnswer() {
  const randomAnswer = Math.floor(Math.random() * 5);
  return randomAnswer;
}

const generateColor = (balls) => {
  const actualAnswer = generateRandomAnswer();
  for (let index = 0; index < balls; index += 1) {
    const newElement = document.createElement('div');
    newElement.className = 'ball';
    newElement.id = `ball${index + 1}`;
    if (index === actualAnswer) {
      newElement.style.backgroundColor = `rgb${rgbColor.innerText}`;
    } else {
      newElement.style.backgroundColor = `rgb(${color()}, ${color()}, ${color()})`;
    }
    colorOptions.appendChild(newElement);
  }
};

function checkColor(checkAnswer) {
  if (checkAnswer.style.backgroundColor === `rgb${rgbColor.innerText}`) {
    answer.innerHTML = 'Acertou!';
    counter += 3;
  } else {
    answer.innerHTML = 'Errou! Tente novamente';
  }
  showCounter.innerText = counter;
  // console.log(showCounter.innerText);
  counterSection.appendChild(showCounter);
}

// console.log(counter);

function deletePrevious() {
  colorOptions.innerHTML = '';
}

colorOptions.addEventListener('click', (e) => {
  const balls = document.getElementsByClassName('ball');
  const checkAnswer = e.target;
  // console.log(`answer =  ${answer.style.backgroundColor}`);
  for (let index = 0; index < balls.length; index += 1) {
    if (balls[index] === checkAnswer) {
      balls[index].classList.add('answer');
    } else {
      balls[index].classList.remove('answer');
    }
  }
  checkColor(checkAnswer);
});

// console.log(`RBDColor =  ${rgbColor.style.backgroundColor}`);

resetBtn.addEventListener('click', () => {
  showColor();
  deletePrevious();
  generateColor(6);
  answer.innerHTML = 'Escolha uma cor';
});

window.onload = () => {
  showColor();
  generateColor(6);
};
