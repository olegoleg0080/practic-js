function noG() {
    document.querySelector('.galerei').style.display= 'none';
}
noG()
const images = [
    {src: 'https://github.com/haranycheva/kk/blob/main/images/news1.jpg?raw=true', alt:'picture'},
    {src: 'https://github.com/haranycheva/kk/blob/main/images/news2.jpg?raw=true', alt:'picture'},
    {src: 'https://github.com/haranycheva/kk/blob/main/images/news3.jpg?raw=true', alt:'picture'},
    {src: 'https://github.com/haranycheva/kk/blob/main/images/news4.jpg?raw=true', alt:'picture'},
    {src: 'https://github.com/haranycheva/kk/blob/main/images/news5.jpg?raw=true', alt:'picture'},
    {src: 'https://github.com/haranycheva/kk/blob/main/images/news6.jpg?raw=true', alt:'picture'},
]
const refs = {
    gellert: document.querySelector('.js-galary'),
}
// console.log(...createGalleryListItem(images))
refs.gellert.append(...createGalleryListItem(images))

function createGalleryListItem(pictures){
    return pictures.map(picture => {
        const itemEl = document.createElement('li');
        itemEl.classList.add('item');
        const imgEl = document.createElement('img');
        imgEl.setAttribute("src", picture.src);
        imgEl.setAttribute("alt", picture.alt);
        itemEl.append(imgEl);
        // console.log(itemEl)
        return itemEl;
    });
}