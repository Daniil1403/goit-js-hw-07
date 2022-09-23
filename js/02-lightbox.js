import { galleryItems } from './gallery-items.js';
// Change code below this line
let items = galleryItems;

const galleryItemsTamplate = ({ preview, original, description }) =>
 `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="Image ${description}" />
</a>`;

const refs = {
 galleryEl: document.querySelector('.gallery'),
};

const render = () => {
 const list = items.map(galleryItemsTamplate).join('');

 refs.galleryEl.innerHTML = '';
 refs.galleryEl.insertAdjacentHTML('beforeend', list);
};

const handleImgClick = (e) => {
 e.preventDefault();

 const activImage = e.target;

 if (activImage === e.currentTarget) return;

 const parent = e.target.closest('.gallery__item');

 var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
 });

 window.addEventListener('keydown', closeModal);
 function closeModal(e) {
  if (e.code === 'Escape') {
   instance.close();
  }
 }
};

render();

refs.galleryEl.addEventListener('click', handleImgClick);
