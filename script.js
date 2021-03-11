const random = `(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

function generateTextRGB() {
  const rgbText = document.querySelector('#rgb-color');

  rgbText.innerText = random;
}

function generateColors() {
  const ballsList = document.querySelectorAll('.ball');
  for (let i = 0; i < ballsList.length; i++) {
   ballsList[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  }
}

generateTextRGB();
generateColors();
