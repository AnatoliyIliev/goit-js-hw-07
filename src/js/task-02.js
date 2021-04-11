const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const navEl = document.querySelector('ul')

const navItemEl = ingredients => {
    return ingredients.map(ingredient => {
        const createEl = document.createElement('li');
        createEl.innerText = ingredient;
        // console.log(createEl)
        return createEl;
    });
}

const elements = navItemEl(ingredients);
// console.log(elements);
navEl.append(...elements);
// console.log(navEl);
