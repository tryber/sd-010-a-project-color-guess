const rgbColor = document.querySelector('#rgb-color');
const colorOptions = document.querySelector('#color-options');
const randomAnswer = Math.floor(Math.random() * 5);
const answer = document.querySelector('#answer');

const color = () => Math.ceil(Math.random() * 255);

function showColor() {
  rgbColor.innerHTML = `(${color()}, ${color()}, ${color()})`;
  rgbColor.style.backgroundColor = `rgb${rgbColor.innerText}`;
  // console.log(rgbColor.innerText);
}

const generateColor = (balls) => {
  for (let index = 0; index < balls; index += 1) {
    const newElement = document.createElement('div');
    newElement.className = 'ball';
    newElement.id = `ball${index + 1}`;
    if (index === randomAnswer) {
      newElement.style.backgroundColor = `rgb${rgbColor.innerText}`;
    } else {
      newElement.style.backgroundColor = `rgb(${color()}, ${color()}, ${color()})`;
    }
    colorOptions.appendChild(newElement);
  }
};

function checkColor(checkAnswer) {
  if (checkAnswer.style.backgroundColor === rgbColor.style.backgroundColor) {
    answer.innerHTML = 'Acertou!';
  } else {
    answer.innerHTML = 'Errou! Tente novamente';
  }
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

window.onload = () => {
  showColor();
  generateColor(6);
};
