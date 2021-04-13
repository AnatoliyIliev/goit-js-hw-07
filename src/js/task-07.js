const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')
console.dir(spanEl)

inputEl.addEventListener('input', changeTextFontSize); 
// inputEl.addEventListener('mousemove', changeInput); 
// inputEl.addEventListener('mousedown', changeInput); //не подходит
// inputEl.addEventListener('mouseup', changeInput); // реагирует при отпусканн кнопки

console.log(spanEl.style.fontSize)

function changeTextFontSize(event) {    
    // console.log(event.currentTarget.value)
    return spanEl.style.fontSize = event.currentTarget.value + "px";

    // console.log(spanEl.textContent)
}