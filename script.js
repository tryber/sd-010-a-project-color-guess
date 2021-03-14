const nBalls = 6;

const createRandomRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
};

const createBalls = (numberOfBalls) => {
  const containerBalls = document.querySelector('#section-balls');

  for (let index = 0; index < numberOfBalls; index += 1) {
    const divBall = document.createElement('div');
    divBall.classList.add('ball');
    divBall.style.backgroundColor = createRandomRGB();
    containerBalls.appendChild(divBall);
  }
};

const createRandomCorrect = (numberOfBalls) => {
  const positionCorret = Math.floor(Math.random() * numberOfBalls);
  const ballCorret = document.querySelectorAll('.ball')[positionCorret];
  ballCorret.id = 'correct';
  document.querySelector('#rgb-color p').innerText = ballCorret.style.backgroundColor;
};

const clickBalls = () => {
  document.querySelectorAll('.ball').forEach((e) => {
    e.addEventListener('click', (b) => {
      const answer = document.querySelector('#answer');
      const ball = b.target.style.backgroundColor;
      const correctBall = document.querySelector('#rgb-color p').innerText;
      if (ball === correctBall) answer.innerText = 'Acertou!';
      else answer.innerText = 'Errou! Tente novamente!';
    });
  });
};

createBalls(nBalls);
createRandomRGB();
createRandomCorrect(nBalls);
clickBalls();
