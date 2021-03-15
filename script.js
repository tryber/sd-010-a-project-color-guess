const colorGuess = document.getElementById('rgb-color');

function generateRgbColor() {
  const rgb1 = Math.floor(Math.random() * 255 + 1);
  const rgb2 = Math.floor(Math.random() * 255 + 1);
  const rgb3 = Math.floor(Math.random() * 255 + 1);
  return `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
}

colorGuess.innerHTML = generateRgbColor();
