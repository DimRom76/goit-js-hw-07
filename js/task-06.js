const validationInput = document.querySelector('input#validation-input');

validationInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const lengthString = Number(event.currentTarget.getAttribute('data-length'));

  event.currentTarget.classList.remove('valid');
  event.currentTarget.classList.remove('invalid');

  if (event.currentTarget.value) {
    if (lengthString === event.currentTarget.value.length) {
      event.currentTarget.classList.add('valid');
    } else {
      event.currentTarget.classList.add('invalid');
    }
  }
}
