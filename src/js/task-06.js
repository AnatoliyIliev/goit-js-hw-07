const inputEl = document.querySelector('input')

inputEl.addEventListener('change', changeInput);

function changeInput() {
    // console.log(typeof inputEl.value.length);
    // console.log(typeof Number(inputEl.dataset.length));
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove('invalid');
        return inputEl.classList.add('valid');        
    } 
    // inputEl.classList.remove('valid');
    return inputEl.classList.add('invalid');    
}