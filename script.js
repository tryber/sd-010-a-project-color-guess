function numerosAleatorios() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const numero = document.querySelector('#rgb-color');
  numero.innerHTML = `rgb(${r}, ${g}, ${b})`;
}
numerosAleatorios();

function balls() {
  for (let index = 1; index <= 6; index += 1) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    document.querySelector('#fatherBalls').appendChild(ball);
  }
}
balls();
