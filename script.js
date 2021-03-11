const colorText = document.createElement('h2');
document.querySelector('.colorText').appendChild(colorText);
colorText.id = 'rgb-color';
colorText.innerText = '(' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ')';
for (let counter = 1; counter <= 6; counter += 1) {
  const ball = document.createElement('div');
  ball.style.backgroundColor = 'rgb(' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ')';
  document.querySelector('.colorsContainer').appendChild(ball);
  ball.className = 'ball';
};
const colors = document.querySelectorAll('.ball');
colors[Math.ceil(Math.random() * 6)].classList.add('answer');
document.querySelector('.answer').style.backgroundColor = 'rgb' + colorText.innerText;
const paragraph = document.createElement('p');
document.body.appendChild(paragraph);
paragraph.innerText = 'Escolha uma cor';
document.querySelector('.colorsContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('answer')) {
        paragraph.innerText = 'Acertou!'
    }
    else {
        paragraph.innerText = 'Errou! Tente novamente!'
    }
});
const buttonReset = document.createElement('button');
document.body.appendChild(buttonReset);
buttonReset.id = 'reset-game';
buttonReset.innerText = 'Reiniciar';
buttonReset.addEventListener('click', function() {
    location.reload()
});
