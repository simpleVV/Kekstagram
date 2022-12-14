import { createPicturesData } from './data.js';
import { renderElements, openPopup } from './util.js';
import { createPicture } from './create-picture.js';
import { picturePreview, renderPicturePreview } from './picture-preview.js';

const picturesContainer = document.querySelector('.pictures');
const commentInput = document.querySelector('.social__footer-text');

const onPictureClick = ({ url, likes, comments, description }) => {
  return (evt) => {
    evt.preventDefault();
    renderPicturePreview(url, likes, comments, description);
    openPopup(picturePreview);
    commentInput.focus();
  };
};

const picturesData = createPicturesData();
const pictureElements = picturesData.map((picture) => createPicture(picture));

pictureElements.forEach((element, index) => {
  element.addEventListener('click', onPictureClick(picturesData[index]));
});

renderElements(pictureElements, picturesContainer);
