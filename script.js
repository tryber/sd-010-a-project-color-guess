const colorText = document.createElement('h2');
document.querySelector('.colorText').appendChild(colorText);
colorText.id = 'rgb-color';
colorText.innerText = '(' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ')';
for (let counter = 1; counter <= 6; counter += 1) {
    const ball = document.createElement('div');
    ball.style.backgroundColor = 'rgb(' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ')';
    document.querySelector('.colorsContainer').appendChild(ball);
    ball.className = 'ball';
}