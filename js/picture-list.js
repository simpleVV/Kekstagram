import { createPicturesData } from './data.js';
import { renderElements, openPopup } from './util.js';
// import { bigPicture, createPicturePreview } from './big-picture.js';
// import { loadData } from './backend.js';
// import { onLoadError } from './error.js';

const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const onPictureClick = (pictureData) => {
  return (evt) => {
    evt.preventDefault();
    // createPicturePreview(pictureData);
    // openPopup(bigPicture);
  };
};

const createPicture = ( {url, likes, comments, description} ) => {
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.addEventListener('click', onPictureClick({ url, likes, comments, description }));

  return picture;
}

const picturesData = createPicturesData();
const pictureElements = picturesData.map((picture) => createPicture(picture));

renderElements(pictureElements, picturesContainer);


// const onSuccessLoad = (data) => {
//   const picturesData = data;
//   const pictureElements = picturesData.map((picture) => createPicture(picture));

//   renderElements(pictureElements, picturesContainer);
// };

// loadData(onSuccessLoad, onLoadError);



