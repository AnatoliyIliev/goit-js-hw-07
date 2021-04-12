const inputEl = document.querySelector('input')
// console.log(inputEl.dataset.length)

inputEl.addEventListener('change', changeInput);

function changeInput() {
    console.log(inputEl.value.length);
    console.log(inputEl.dataset.length);
    if (inputEl.value.length === inputEl.dataset.length) {
        return inputEl.classList.add('valid');
    };
    console.log(inputEl);
    return inputEl.classList.add('invalid');
}