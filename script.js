// Gerando cor aleatória
const rgbColor = document.querySelector('#rgb-color');

function generatesRandomRgb () {
  const randomColor = `rgb(${Math.ceil(Math.random() * 254)}, ${Math.ceil(Math.random() * 254)}, ${Math.ceil(Math.random() * 254)})`

  return randomColor;
}

// Gerar cores aleatórias dos círculos
const balls = document.querySelectorAll('.ball')

function generateBallsColor () {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = generatesRandomRgb();
  }
}

generateBallsColor();