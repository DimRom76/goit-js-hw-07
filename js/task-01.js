const listCategories = document.querySelectorAll('li.item');

console.log(`В списке ${listCategories.length} категории.`);

listCategories.forEach(el => {
  const titleCategories = el.querySelector('h2');
  console.log(`Категория: ${titleCategories.innerHTML}`);

  const subCategories = el.querySelectorAll('li');
  console.log(`Количество элементов: ${subCategories.length}`);
});
