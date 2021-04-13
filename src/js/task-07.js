const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')
console.dir(spanEl)

inputEl.addEventListener('mousemove', changeInput); 
// inputEl.addEventListener('mousedown', changeInput); //не подходит
// inputEl.addEventListener('mouseup', changeInput); // реагирует при отпусканн кнопки

console.log(spanEl.style.fontSize)

function changeInput() {
    
    spanEl.textContent.style.fontSize = inputEl.value + "px";

    console.log(inputEl.value)
    console.log(spanEl.textContent)
    
    return 


    // if (inputEl.value.length === Number(inputEl.dataset.length)) {
    //     inputEl.classList.remove('invalid');
    //     return inputEl.classList.add('valid');        
    // } 
    // // inputEl.classList.remove('valid');
    // return inputEl.classList.add('invalid');    
}