
const refs = {
    controlsDivEl: document.querySelector('#controls'),
    boxesDivEl: document.querySelector('#boxes'),
    actionButton: document.querySelectorAll('button'),
    inputEl: document.querySelector('input')
}

console.log(refs.controlsDivEl);
console.log(refs.boxesDivEl);

refs.inputEl.addEventListener('input', createBoxes);
// refs.actionButton[0].addEventListener('click', handelButtonClickDecrement);
// refs.actionButton[1].addEventListener('click', handelButtonClickIncrement);

function createBoxes(amount) {
    console.log(amount);
    // console.log(refs.inputEl.value);
    const createEl = document.createElement('li');
    createEl.classList.add('gallery_images');
    createEl.insertAdjacentHTML('afterbegin', '<div>');  
    console.log(createEl.insertAdjacentHTML('afterbegin', '<div>'));
    console.log(refs.boxesDivEl);
}

function destroyBoxes(){

    return;
}