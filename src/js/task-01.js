const navEl = document.querySelector('#categories')

const navLinksEl = navEl.querySelectorAll('.item')
console.log(`В списке ${navLinksEl.length} категории.`)

const titleEl = navEl.querySelector('h2')
console.log(`Категория: ${titleEl.textContent}`)

const numberEl = navLinksEl.querySelectorAll('li')
console.log(`Категория: ${numberEl.length}`)