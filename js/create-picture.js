import { createPicturesData } from './mock-data.js';
import { openPicturePreview } from './big-picture.js';
import { renderElements } from './util.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const onPictureClick = (pictureData) => {
  return (evt) => {
    evt.preventDefault();
    openPicturePreview(pictureData)
  };
};

const createPicture = ( {url, likes, comments} ) => {
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.addEventListener('click', onPictureClick({ url, likes, comments }));

  return picture;
}

const picturesData = createPicturesData();
const pictureElements = picturesData.map((picture) => createPicture(picture));

renderElements(pictureElements, picturesContainer);

