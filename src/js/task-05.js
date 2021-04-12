const inputEl = document.querySelector('input')
const titleEl = document.querySelector('#name-output')
// console.dir(inputEl)
// console.log(inputEl)
// console.log(titleEl.textContent)
// console.log(inputEl.value)
// inputEl.placeholder = 'незнакомец'
// titleEl.textContent = 'xfgsdfg'

inputEl.addEventListener('change', changeInput);

function changeInput() {
    if (inputEl.value === ''){
        return titleEl.textContent = 'незнакомец'; 
    }
    // console.log(inputEl.value)
    return titleEl.textContent = inputEl.value;    
}