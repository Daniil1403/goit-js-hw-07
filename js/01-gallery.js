import { galleryItems } from './gallery-items.js';
// Change code below this line
let items = galleryItems;

const galleryItemsTamplate = ({ preview, original, description }) =>
 `<div data-title="${description}" class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img 
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image ${description}"
    />
  </a>
</div>`;

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

 const instance = basicLightbox.create(`
        <img src='${activImage.dataset.source}'</img>
`);

 instance.show();

 window.addEventListener('keydown', closeModal);
 function closeModal(e) {
  if (e.code === 'Escape') {
   instance.close();
  }
 }
};

render();

refs.galleryEl.addEventListener('click', handleImgClick);
