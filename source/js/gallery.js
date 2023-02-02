import {
  renderElements,
  openPopup
} from './util.js';
import {
  picturePreview,
  showPicturePreview,
  cancelButton
} from './picture-preview.js';
import { createPicture } from './create-picture.js';

const picturesContainer = document.querySelector('.pictures');

const onPictureClick = (pictureData) => {
  return (evt) => {
    evt.preventDefault();
    showPicturePreview(pictureData);
    openPopup(picturePreview);
    cancelButton.focus();
  };
};

const fillGallery = (picturesData) => {
  const pictureList = picturesData.map((picture) => createPicture(picture));

  renderElements(pictureList, picturesContainer);

  pictureList.forEach((picture, index) => {
    picture.addEventListener('click', onPictureClick(picturesData[index]));
  });
};

const clearGallery = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => picturesContainer.removeChild(picture));
};

export {
  fillGallery,
  clearGallery
};


// Делегирование событий на родителя
// const pictures = document.querySelectorAll('.picture__img');
// const images = Array.from(pictures);

// const onPictureClick = (pictureData) => {
//   renderPicturePreview(pictureData);
//   openPopup(picturePreview);
//   commentInput.focus();
// };

// picturesContainer.addEventListener('click', (evt) => {
//   evt.preventDefault();

//   if (evt.target.matches('.picture__img')) {
//     const pictureIndex = images.indexOf(evt.target)
//     onPictureClick(picturesData[pictureIndex]);
//   }
// })
