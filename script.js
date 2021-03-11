window.onload = function answer() {
  const c = document.getElementsByClassName('ball');
  const index = Math.ceil(Math.random() * 6) - 1;
  c[index].id = 'correct';
  for (let i = 0; i < c.length; i += 1) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    c[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
  const rgbColor = document.getElementById('correct').style.backgroundColor;
  document.getElementById('rgb-color').innerText = rgbColor;
};

function attempt(event) {
  if (event.target.id === 'correct') {
    document.getElementById('answer').innerText = 'Acertou!';
  } else {
    document.getElementById('answer').innerText = 'Errou! Tente novamente!';
  }
}

document.getElementById('colors-container').addEventListener('click', attempt);

function refreshPage() {
  window.location.reload();
}

document.getElementById('reset-game').addEventListener('click', refreshPage);
