import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGallery = document.querySelector('.gallery');

function createGallleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<img
                src="${preview}"
                alt="${description}"
                />`;
    }).join('');
};

listGallery.insertAdjacentHTML('beforeend', createGallleryMarkup(galleryItems));

const lightBox = document.createElement('div');
lightBox.id = 'lightbox';
document.body.appendChild(lightBox);
 
const images = document.querySelectorAll('img');
images.forEach((image) => {
    image.addEventListener('click', e => {
        lightBox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightBox.firstChild) {
            lightBox.removeChild(lightBox.firstChild);
        }
        lightBox.appendChild(img);
    })
});

lightBox.addEventListener('click', revoveActiveClassLightbox);

function revoveActiveClassLightbox (e) {

    lightBox.classList.remove('active');
}








