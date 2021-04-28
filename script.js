const balls = document.querySelectorAll('.ball');
// const ballsContainer = document.querySelectorAll('#balls');
const rgbTextDisplay = document.getElementById('rgb-color');

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
  const correctAnswer = (`${Math.random() * 254},
  ${Math.random() * 254},
  ${Math.random() * 254}`);

  rgbTextDisplay.innerText = `(${Math.round(correctAnswer / 100) * 100})`;

  randomize();

  balls[Math.floor(Math.random() * 6)].style.backgroundColor = (`rgb(${correctAnswer})`);
};

load();

// randomize();

balls.addEventListener('click', (event) => {
  const itemClicado = event.target;
  itemClicado.classList.add('answer');
});
