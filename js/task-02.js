const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elements = ingredients.map(el => {
  const liElement = document.createElement('li');
  liElement.innerHTML = el;

  return liElement;
});

const ulIngradients = document.querySelector('#ingredients');
ulIngradients.append(...elements);
