let counterValue = 0;
const listenerVal = document.querySelector('span');
const navEl = document.querySelectorAll('button');

navEl[0].addEventListener('click', handelButtonClickDecrement);
navEl[1].addEventListener('click', handelButtonClickIncrement);

function handelButtonClickDecrement() {
    listenerVal.textContent = counterValue - 1;
    return counterValue -= 1;    
}

function handelButtonClickIncrement() {
    listenerVal.textContent = counterValue + 1;
    return counterValue += 1;  
}

