function circleColors() {
  const circles = document.getElementsByClassName('ball');
  for (let index = 0; index < circles.length; index += 1) {
    circles[index].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  }
}

window.onload = circleColors();
