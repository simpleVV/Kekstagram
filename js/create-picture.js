import { createPicturesData } from './mock-data.js';
import { showPicturePreview } from './big-picture.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const createPicture = ({url, likes, comments}) => {
  const picture = pictureTemplate.cloneNode(true);
  const pictureImg = picture.querySelector('.picture__img');
  const pictureLikes = picture.querySelector('.picture__likes');
  const pictureComments = picture.querySelector('.picture__comments');

  pictureImg.src = url;
  pictureLikes.textContent = likes;
  pictureComments.textContent = comments.length;

  return picture;
}

const renderPictures = (data) => {
  const fragment = document.createDocumentFragment();

  data.forEach((element) => {
    fragment.appendChild(createPicture(element));
  });
  picturesContainer.appendChild(fragment)
};

const picturesData = createPicturesData();

renderPictures(picturesData);

// const picture = document.querySelectorAll('.picture');

// const onPictureClick = (pictureData) => {
//   return (evt) => {
//     evt.preventDefault();
//     console.log(pictureData);
//   }
// }

// picture.forEach((picture) => picture.addEventListener('click', onPictureClick));

showPicturePreview(picturesData[0]);
