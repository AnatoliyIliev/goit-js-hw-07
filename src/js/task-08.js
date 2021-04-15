const refs = {
    controlsDivEl: document.querySelector('#controls'),
    boxesDivEl: document.querySelector('#boxes'),
    actionButton: document.querySelectorAll('button'),   
    // inputEl: document.querySelector('input') 
}

refs.actionButton[0].addEventListener('click', createBoxes);
refs.actionButton[1].addEventListener('click', destroyBoxes);
// refs.inputEl.addEventListener('input', createBoxes);

function createBoxes(amount) {
    const inputEl = document.querySelector('input')
    console.log(Number(inputEl.value));
    // console.log(amount.currentTarget.value);
    // const numberOfDiv = Number(amount.currentTarget.value);
    // console.log(Number(amount.currentTarget.value));
    const numberOfDiv = refs.boxesDivEl.insertAdjacentHTML('afterbegin', "<div class='random-colour'></div>"); 
    console.log(numberOfDiv)
    // return numberOfDiv * Number(inputEl.value);
}

function destroyBoxes(){  
    // return refs.boxesDivEl = " " ; 
}

// refs.boxesDivEl.insertAdjacentHTML('afterbegin', '<div>');  
// console.log(refs.boxesDivEl);
// return refs.boxesDivEl * Number(amount.currentTarget.value);
