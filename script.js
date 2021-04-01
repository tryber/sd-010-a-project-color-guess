// const ballsContainer = document.querySelector('.ball-container');
const balls = document.querySelectorAll('.ball');

const GenerateColorBall = () => {
  const colorRgbNumbers = [];

  for (let index = 1; index <= 3; index += 1) {
    const numberRgb = Math.floor(Math.random() * 255) + 1;
    colorRgbNumbers.push(numberRgb);
  }

  const colorRgb = `rgb(${colorRgbNumbers[0]}, ${colorRgbNumbers[1]}, ${colorRgbNumbers[2]})`;
  return colorRgb;
};

const ApplyColorBall = () => {
  balls.forEach((ball) => {
    const color = GenerateColorBall();
    const currentBall = ball;
    currentBall.style.cssText = `background-color: ${color}`;
  });
};

ApplyColorBall();
