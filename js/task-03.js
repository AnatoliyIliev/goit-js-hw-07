const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

const navEl = document.querySelector('ul')
  
const navItemEl = images => {
    return images.map(image => {
        const createEl = document.createElement('li');
        createEl.classList.add('gallery');
        createEl.insertAdjacentHTML('afterbegin', `<img class="images" src=${image.url} alt='${image.alt}'>`);
        // const imageEl = document.querySelector('img')
        // imageEl.classList.add('gallery_images');
        // imageEl.style.width = '120px';
        return createEl;
    });
}

const elements = navItemEl(images);
navEl.append(...elements);
// const imageEl = document.querySelector('img')
// imageEl.classList.add('gallery_images');
// imageEl.setAttribute('class', 'gallery_images');
// imageEl.style.width = '120px';
// console.log(navEl);
