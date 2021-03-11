function colors() {
  return Math.random() * 256;
}

function generateRandomColors() {
  const numberOfColors = 6;
  for (let index = 0; index < numberOfColors; index += 1) {
    const ballsContainer = document.querySelector('.balls-container');
    const ballsColors = document.createElement('div');
    ballsColors.className = 'ball';
    ballsColors.style.backgroundColor = `rgb(${colors()}, ${colors()},${colors()})`;
    ballsContainer.appendChild(ballsColors);
  }
}

generateRandomColors();
