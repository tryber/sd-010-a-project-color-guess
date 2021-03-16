// Gerando cor aleatória que deverá ser adivinhadas
const rgbColor = document.querySelector('#rgb-color');

function generatesRandomRgb () {
  rgbColor.innerText = `(${Math.ceil(Math.random() * 254)}, ${Math.ceil(Math.random() * 254)}, ${Math.ceil(Math.random() * 254)})`
}

generatesRandomRgb();