const colorText = document.createElement('h2');
document.querySelector('.colorText').appendChild(colorText);
colorText.id = 'rgb-color';
colorText.innerText = '(' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ', ' + parseInt(Math.random()*255) + ')'