const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const navEl = document.querySelector('#ingredients')

const navItemEl = ingredients => {
    return ingredients.map(ingredient => {
        const createEl = document.createElement('li');
        createEl.innerText = ingredient; 
        return createEl;
    });
}

const elements = navItemEl(ingredients);
// console.log(elements);
navEl.append(...elements);
console.log(navEl);
