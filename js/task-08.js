const divEl = document.getElementById('boxes');
const input = document.querySelector('input');
const addButton = document.querySelector('[data-action="render"]');
const delButton = document.querySelector('[data-action="destroy"]');

addButton.addEventListener('click', clickButton);
delButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let arr = [];
  let currentSize = 30;
  //   let currentColor = () => Math.floor(Math.random() * 16777215).toString(16);
  let Color = () => Math.floor(Math.random() * 255);

  for (let i = 0; i < amount; i += 1) {
    const createDivElement = document.createElement('div');
    const currentRGBColor = () => `rgb(${Color()}, ${Color()}, ${Color()})`;
    createDivElement.setAttribute(
      'style',
      `background: ${currentRGBColor()}; width: ${currentSize}px; height: ${currentSize}px; margin: 5px; border: 1px solid black`,
    );

    currentSize += 10;

    arr.push(createDivElement);
  }

  return arr;
}

function destroyBoxes() {
  divEl.innerHTML = '';
  input.value = '';
}

function clickButton() {
  divEl.append(...createBoxes(input.value));
}
