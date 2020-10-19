const inputName = document.querySelector('input#name-input');
const spanOutput = document.querySelector('span#name-output');

inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
  spanOutput.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : 'незнакомец';
}
