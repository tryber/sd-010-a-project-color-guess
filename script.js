const balls = document.querySelectorAll('.ball');
// const ballsContainer = document.querySelectorAll('#balls');
const rgbTextDisplay = document.getElementById('rgb-color');
const answer = document.getElementById('answer');

const randomColors = () => (`rgb(${Math.random() * 254},
${Math.random() * 254},
${Math.random() * 254})`);

const randomize = () => {
  balls.forEach((ball) => {
    const itemPaleta = ball;
    itemPaleta.style.backgroundColor = `${randomColors()}`;
  });
};

const load = () => {
  answer.innerText = 'Escolha uma cor';
  // eslint-disable-next-line max-len
  const correctAnswer = (`${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)}`);

  rgbTextDisplay.innerText = `(${correctAnswer})`;
  randomize();

  balls[Math.floor(Math.random() * 6)].style.backgroundColor = (`rgb(${correctAnswer})`);
  balls.forEach((ball) => {
    ball.addEventListener('click', (event) => {
      if (event.target.style.backgroundColor === (`rgb(${correctAnswer})`)) {
        answer.innerText = 'Acertou!';
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    });
  });
};

load();

document.getElementById('reset-game').addEventListener('click', load);

// randomize();

// ballsContainer.addEventListener('click', (event) => {
//   const itemClicado = event.target;
//   itemClicado.classList.add('answer');
// });
