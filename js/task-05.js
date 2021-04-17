const inputEl = document.querySelector('#name-input')
const titleEl = document.querySelector('#name-output')
console.dir(inputEl)
// console.log(inputEl)
// console.log(titleEl.textContent)
// console.log(inputEl.value)
// inputEl.placeholder = 'незнакомец'
// titleEl.textContent = 'xfgsdfg'

inputEl.addEventListener('input', changeInput);

function changeInput(event) {
    // console.log(event.currentTarget.value)
    if (inputEl.value === ''){
        return titleEl.textContent = 'незнакомец'; 
    }
    // console.log(inputEl.value)
    return titleEl.textContent = event.currentTarget.value;    
}

