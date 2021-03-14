const numberBalls = 6;
const containerBalls = document.querySelector('#section-balls');
const answer = document.querySelector('#answer');
const rgbParagraph = document.querySelector('#rgb-color p');
let score = 0;

const createRandomRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
};

const createBalls = (numberOfBalls) => {
  for (let index = 0; index < numberOfBalls; index += 1) {
    const divBall = document.createElement('div');
    divBall.classList.add('ball');
    divBall.style.backgroundColor = createRandomRGB();
    containerBalls.appendChild(divBall);
  }
};

const createRandomCorrect = (numberOfBalls) => {
  const randomPosition = Math.floor(Math.random() * numberOfBalls);
  const randomBall = document.querySelectorAll('.ball')[randomPosition];
  randomBall.id = 'correct';
  rgbParagraph.innerText = randomBall.style.backgroundColor;
};

const clickBalls = () => {
  document.querySelectorAll('.ball').forEach((e) => {
    e.addEventListener('click', (eBall) => {
      const ballBackground = eBall.target.style.backgroundColor;
      const correctBall = rgbParagraph.innerText;

      if (ballBackground === correctBall) {
        answer.innerText = 'Acertou!';
        score += 3;
        document.querySelector('#score').innerText = `Placar: ${score}`;
      } else answer.innerText = 'Errou! Tente novamente!';
    });
  });
};

const clickReset = () => {
  document.querySelector('#reset-game').addEventListener('click', () => {
    containerBalls.innerHTML = '';
    createBalls(numberBalls);
    createRandomCorrect(numberBalls);
    clickBalls();
    answer.innerText = 'Escolha uma cor';
  });
};

createBalls(numberBalls);
createRandomRGB();
createRandomCorrect(numberBalls);
clickBalls();
clickReset();
