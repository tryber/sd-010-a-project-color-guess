const balls = document.querySelectorAll('.ball');

function randomRGBNumbers() {
  return Math.floor(Math.random() * 256);
}

function setColorToBalls() {
  balls.forEach((ball) => {
    const color1 = randomRGBNumbers();
    const color2 = randomRGBNumbers();
    const color3 = randomRGBNumbers();
    const color = `rgb(${color1}, ${color2}, ${color3})`;
    ball.style.backgroundColor = color;
  });
}

window.onload = () => {
  setColorToBalls();
};
