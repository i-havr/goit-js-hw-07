import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}" 
            alt="${description}"> 
        </a>
        
      `;
    })
    .join('');
}
