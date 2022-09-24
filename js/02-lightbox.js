import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const imageMarkup = creatSrtElmGallImg(galleryItems);

gallery.insertAdjacentHTML('beforeend', imageMarkup);

function creatSrtElmGallImg(galleryItems) {
 return galleryItems
  .map(({ preview, original, description }) => {
   return `<a class="gallery__item" onclick="event.preventDefault()"
     href="${original}">
  <img class="gallery__image"
   src="${preview}"
    alt="${description}" />
</a>`;
  })
  .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
 captionsData: 'alt',
 captionDelay: 250,
 overlayOpacity: 0.7,
});
