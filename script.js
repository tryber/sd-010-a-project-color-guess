const rgbColor = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');

function randomRGB() {
  return Math.floor(Math.random()*255);
}

rgbColor.innerText = `(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;

for (ball of balls) {
  ball.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`
}