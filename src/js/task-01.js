const navEl = document.querySelector('#categories')

const navLinksEl = navEl.querySelectorAll('.item')
console.log(`В списке ${navLinksEl.length} категории.`)

const titleEl = navEl.querySelector('h2')
console.log(`Категория: ${titleEl.textContent}`)

const numberEl = navEl.querySelector('ul').children.length;
console.log(`Количество элементов: ${numberEl}`)