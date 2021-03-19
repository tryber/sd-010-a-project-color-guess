const selectBalls = document.getElementsByClassName('ball');

function generateRandomColors() {
  for (let index = 0; index < selectBalls.length; index += 1) {
    selectBalls[index].style.backgroundColor = `rgb(${Math.random() * 255}
    , ${Math.random() * 255}, ${Math.random() * 255})`;
  }
}
generateRandomColors();
