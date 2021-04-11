// const navEl = document.querySelector('#categories')

const navLinksEl = document.querySelectorAll('.item')
console.log(`В списке ${navLinksEl.length} категории.`)


const navTitleEl = elements => {
    return elements.forEach(element => {
        const titleEl = element.querySelector('h2')
        console.log(`Категория: ${titleEl.textContent}`)

        const numberEl = element.querySelector('ul').children.length;
        console.log(`Количество элементов: ${numberEl}`)
    });
}

const elements = navTitleEl(navLinksEl);
// console.log(elements);
// navEl.append(...elements);
// console.log(navEl);

/*
const navEl = document.querySelector('#categories')

const navLinksEl = navEl.querySelectorAll('.item')
console.log(`В списке ${navLinksEl.length} категории.`)

const titleEl = navEl.querySelector('h2')
console.log(`Категория: ${titleEl.textContent}`)

const numberEl = navEl.querySelector('ul').children.length;
console.log(`Количество элементов: ${numberEl}`)
*/