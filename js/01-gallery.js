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

const actionItem = (title) => {
 const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

 instance.show();

 console.log(title);
};

const handleImgClick = (e) => {
 e.preventDefault();

 if (e.target === e.currentTarget) return;

 const parent = e.target.closest('.gallery__item');
 const action = e.target.dataset.source;
 const title = parent.dataset.title;

 switch (action) {
  case '${original}':
   actionItem(title);
   break;
 }

 console.log(action, title);
};

render();

refs.galleryEl.addEventListener('click', handleImgClick);
window.addEventListener('Escape', function (e) {
 if (instance.visible()) {
  instance.close;
 }
});
