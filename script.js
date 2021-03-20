function numerosAleatorios() {
  const ball = document.querySelectorAll('.ball');
  const numero = document.querySelector('#rgb-color');
  numero.innerText = ball[Math.floor(Math.random() * ball.length)].style.backgroundColor;
}

function balls(numBer) {
  for (let index = 1; index <= numBer; index += 1) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    document.querySelector('#fatherBalls').appendChild(ball);
  }
}
balls(6);

function changeColorsBalls() {
  const balss = document.getElementsByClassName('ball');
  for (let index = 0; index < balss.length; index += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const valor = `rgb(${r}, ${g}, ${b})`;
    balss[index].style.backgroundColor = valor;
  }
}
changeColorsBalls();
numerosAleatorios();
function clickBalls() {
  const answer = document.getElementById('answer');
  const fatherBalls = document.getElementById('fatherBalls');
  const numero = document.querySelector('#rgb-color');
  const placar = document.querySelector('#placar');
  let conta = 0;
  placar.innerHTML = 'Placar: ' + 0;
  fatherBalls.addEventListener('click', (e) => {
    const placar = document.querySelector('#placar');
    const ballElement = e.target;
    if (ballElement.className === 'ball') {
      if (ballElement.style.backgroundColor === numero.innerHTML) {
        answer.innerHTML = 'Acertou!';
        placar.innerHTML = 'Placar: ' + (conta += 3);
      } else {
        answer.innerHTML = 'Errou! Tente novamente!';
      }
    }
    localStorage.setItem('placar', placar.innerHTML);
  });
}
clickBalls();

function savePlacar(){
  const getItem = localStorage.getItem('placar');
  if(getItem === null) {
     placar.innerHTML = 'Placar: ' + 0;
  }else {
    placar.innerHTML = getItem;
  }
}
savePlacar();

function resetarPlarcar(){
  const resetPlacar = document.querySelector('#resetPlacar');
  resetPlacar.addEventListener('click', () => {
   const reset = localStorage.setItem('placar', placar.innerHTML)
   const getItem = localStorage.getItem('placar');
    localStorage.clear()
    if(getItem !== ''){
      placar.innerHTML = 'Placar: ' + 0;
    }
  })
}
resetarPlarcar();