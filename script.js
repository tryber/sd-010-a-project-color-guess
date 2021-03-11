window.onload = function answer() {
  const circles = document.getElementsByClassName('ball');
  const index = Math.ceil(Math.random() * 6) - 1;
  circles[index].id = 'correct';
  for (let i = 0; i < circles.length; i += 1) {
    circles[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
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
