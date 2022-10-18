import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.addEventListener('click', onGalleryImageClick);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `      
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}" 
            data-source="${original}" 
            alt="${description}"> 
        </a>
    </div>
            `;
    })
    .join('');
}

function onGalleryImageClick(event) {
  const targetOfClick = event.target.nodeName;
  const imageUrl = event.target.dataset.source;
  const imageDesc = event.target.alt;

  if (targetOfClick !== 'IMG') {
    return;
  }
  event.preventDefault();

  const lightboxImage = basicLightbox.create(
    `<img src="${imageUrl}" alt="${imageDesc}">`,
  );
  lightboxImage.show();
  closeImageByEscape(lightboxImage);
}

function closeImageByEscape(openImage) {
  window.addEventListener('keydown', onEscKeyPress);

  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      openImage.close();
      window.removeEventListener('keydown', onEscKeyPress);
    }
    return;
  }
}
