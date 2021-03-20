const rgbColor = document.querySelector('#rgb-color');
const colorOptions = document.querySelector('#color-options');

const color = () => Math.ceil(Math.random() * 255);

function showColor() {
  rgbColor.innerHTML = `(${color()}, ${color()}, ${color()})`;
}

const generateColor = (balls) => {
  for (let index = 0; index < balls; index += 1) {
    const newElement = document.createElement('div');
    newElement.className = 'ball';
    newElement.style.backgroundColor = `rgb(${color()}, ${color()}, ${color()})`;
    colorOptions.appendChild(newElement);
  }
};

window.onload = () => {
  showColor();
  generateColor(6);
}