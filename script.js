const myAddEventListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
};

const myAddEventsListeners = (elementsNodes, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const nodes = document.querySelectorAll(elementsNodes);
  for (let index = 0; index < nodes.length; index += 1) {
    nodes[index].addEventListener(event, fn);
  }
};

/**
 * Retorna um valor aleatório entre min e max.
 * Caso não informado o @param(min) ele será 0.
 *
 * @param {number} max Número máximo.
 * @param {number} min Número mínimo.
 * @returns Valor aleatório entre min e max.
 * @version 0.1
 */
const randomNumber = (max, min = 0) =>
  Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min)) + Math.floor(min));

const generateRandomColor = () =>
  `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;

const setRandomColors = (qtyIndex) => {
  const balls = document.querySelectorAll('.ball');

  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = generateRandomColor();
  }

  const answer = document.querySelector('#answer');
  answer.textContent = 'Escolha uma cor';

  const indexColorsBalls = document.querySelectorAll('.ball');
  document.querySelector('#rgb-color').innerHTML = indexColorsBalls[randomNumber(0, qtyIndex)]
    .style.backgroundColor.replace('rgb', '');
};

const checkCorrect = (element) => document.querySelector('#rgb-color').textContent === element
  .style.backgroundColor.replace('rgb', '');

const changeText = (ev) => {
  const answer = document.querySelector('#answer');
  const score = document.querySelector('#score');
  if (checkCorrect(ev.target)) {
    answer.textContent = 'Acertou!';
    score.textContent = parseInt(score.textContent, 10) + 3;
  } else {
    answer.textContent = 'Errou! Tente novamente!';
    if (parseInt(score.textContent, 10) > 0) {
      score.textContent = parseInt(score.textContent, 10) - 1;
    }
  }
};

const createColorsBalls = (qty) => {
  /**
   * Para escolher uma cor aleatória em setRandomColors(qty);
   */
  const qtyIndex = qty - 1;
  const colorsBalls = document.querySelector('#colors-balls');
  colorsBalls.innerHTML = '';

  for (let index = 0; index < qty; index += 1) {
    const element = document.createElement('div');
    element.classList.add('ball');
    colorsBalls.appendChild(element);
  }

  setRandomColors(qtyIndex);
  myAddEventsListeners('.ball', 'click', changeText);
};

window.onload = () => {
  const inputQtyNumber = document.querySelector('#qty-balls');
  createColorsBalls(6);
  myAddEventListener('#reset-game', 'click', () => { setRandomColors(inputQtyNumber.value); });
  myAddEventListener('#qty-balls', 'focusout', () => { createColorsBalls(inputQtyNumber.value); });
};
