const balls = document.querySelectorAll('.ball');
const randomColors = () => (`rgb(${Math.random() * 254},
${Math.random() * 254},
${Math.random() * 254})`);

const randomize = () => {
  balls.forEach((ball) => {
    const itemPaleta = ball;
    itemPaleta.style.backgroundColor = `${randomColors()}`;
  });
};
randomize();
