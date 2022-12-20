import { createPicturesData } from './data.js';
import { renderElements, openPopup } from './util.js';
import { createPicture } from './create-picture.js';
import { picturePreview, renderPicturePreview } from './picture-preview.js';

const picturesContainer = document.querySelector('.pictures');
const commentInput = document.querySelector('.social__footer-text');

const onPictureClick = (pictureData) => {
  return (evt) => {
    evt.preventDefault();
    renderPicturePreview(pictureData);
    openPopup(picturePreview);
    commentInput.focus();
  };
};

const picturesData = createPicturesData();
const pictureList = picturesData.map((picture) => createPicture(picture));

pictureList.forEach((picture, index) => {
  picture.addEventListener('click', onPictureClick(picturesData[index]));
});

renderElements(pictureList, picturesContainer);

//Делегирование событий на родителя
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
