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
  if (event.target.id === 'correct' || event.target.id === 'checked') {
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

if (sessionStorage.getItem('score') === null) {
  sessionStorage.setItem('score', '0');
} else {
  sessionStorage.setItem('score', parseInt(sessionStorage.getItem('score'), 10) + 0);
}

document.getElementById('score').innerText = sessionStorage.getItem('score');

function score(event) {
  const tagScore = document.getElementById('score');
  if (event.target.id === 'correct') {
    tagScore.innerText = parseInt(tagScore.innerText, 10) + 3;
    document.getElementById('correct').id = 'checked';
  }
  sessionStorage.setItem('score', tagScore.innerText);
}

document.getElementById('colors-container').addEventListener('click', score);
