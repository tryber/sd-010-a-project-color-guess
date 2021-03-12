/* random color */
let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
let balls = document.querySelectorAll('.ball');

function generateRandomColor() {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = generateRandomColor();
}
