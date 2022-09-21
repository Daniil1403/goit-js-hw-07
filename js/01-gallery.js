import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsTamplate = ({ preview, original, description }) =>
 `<div class="gallery__item">
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
 const list = galleryItems
  .map((galleryItem) => galleryItemsTamplate(galleryItem))
  .join('');

 refs.galleryEl.innerHTML = '';
 refs.galleryEl.insertAdjacentHTML('beforeend', list);
};

const handleImgClick = (e) => {
 console.log(e.target.dataset.source);
 console.log(e.currentTarget);
};

//console.log(galleryItems);
render();

refs.galleryEl.addEventListener('click', handleImgClick);
