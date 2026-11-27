import { RenderPictureConfig } from './configs.js';
import { createPictures } from './create-pictures.js';
import { createFullscreen } from './create-fullscreen.js';

function createGallery(galleryContainerClassName, mockData) {
  const pictures = createPictures(galleryContainerClassName, mockData, RenderPictureConfig);

  const picturesContainer = document.querySelector(galleryContainerClassName);
  const bigPictureContainer = document.querySelector('.big-picture');

  if (!picturesContainer || !bigPictureContainer) {
    return;
  }

  const onPictureClicked = (evt) => {
    const picture = evt.target.closest('.picture');
    const pictureData = pictures.get(picture);

    if (picture && pictureData) {
      evt.preventDefault();
      createFullscreen(bigPictureContainer, pictureData);
    }
  };

  picturesContainer.addEventListener('click', onPictureClicked);
}

export { createGallery };
