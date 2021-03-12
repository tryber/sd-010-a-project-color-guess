/* random color */
const balls = document.querySelectorAll('.ball');

function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = generateRandomColor();
}
