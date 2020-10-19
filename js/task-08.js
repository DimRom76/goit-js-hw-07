const FIRST_WIDTH = 30;
const FIRST_HEIGHT = 30;
const STEP = 10;

const btnIncrement = document.querySelector('button[data-action="render"]');
const btnDecrement = document.querySelector('button[data-action="destroy"]');
const numberInput = document.querySelector('div#controls>input');
const divBoxes = document.querySelector('div#boxes');

btnIncrement.addEventListener('click', onBtnIncremetClick);
btnDecrement.addEventListener('click', onBtnDecrementClick);

function onBtnIncremetClick() {
  const numberBoxes = numberInput.value ? parseInt(numberInput.value) : 0;
  createBoxes(numberBoxes);
}

function onBtnDecrementClick() {
  destroyBoxes();
}

function destroyBoxes() {
  while (divBoxes.firstChild) {
    divBoxes.removeChild(divBoxes.firstChild);
  }
}

function createBoxes(amount) {
  let render = '';
  for (let i = 0; i < amount; i++) {
    const width = FIRST_WIDTH + STEP * i;
    const height = FIRST_HEIGHT + STEP * i;
    const colorRandom = (Math.random().toString(16) + '000000')
      .substring(2, 8)
      .toUpperCase();

    render += `<div style = 'width: ${width}px; height: ${height}px; background-color: #${colorRandom}'></div>`;
  }

  divBoxes.insertAdjacentHTML('afterBegin', render);
}
