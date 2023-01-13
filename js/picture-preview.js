import { renderElements, checkIsEscEvent, closePopup } from './util.js';

const picturePreview = document.querySelector('.big-picture');
const socialComment = picturePreview.querySelector('.social__comment');
const pictureCancelButton = picturePreview.querySelector('.big-picture__cancel');

const createPictureComment = ({avatar, name, message}) => {
  const comment = socialComment.cloneNode(true);
  const socialPicture = comment.querySelector('.social__picture');

  socialPicture.src = avatar;
  socialPicture.alt = name;

  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const closePicturePreview = () => {
  closePopup(picturePreview);
  document.removeEventListener('keydown', onPreviewEscPress);
  pictureCancelButton.removeEventListener('click', onCancelButtonClick);
};

const onPreviewEscPress = (evt) => {
  if (checkIsEscEvent(evt)) {
    evt.preventDefault();
    closePicturePreview();
  }
};

const onCancelButtonClick = (evt) => {
  evt.preventDefault();
  closePicturePreview();
};

const renderPicturePreview = ({ url, likes, comments, description }) => {
  const socialComments = picturePreview.querySelector('.social__comments');
  const commentList = comments.map((comment) =>
    createPictureComment(comment));

  picturePreview.querySelector('img').src = url;
  picturePreview.querySelector('.likes-count').textContent = likes;
  picturePreview.querySelector('.comments-count').textContent = comments.length;
  picturePreview.querySelector('.social__caption').textContent = description;
  socialComments.innerHTML = '';

  //Временно
  picturePreview.querySelector('.social__comment-count').classList.add('hidden');
  picturePreview.querySelector('.comments-loader').classList.add('hidden');
  pictureCancelButton.addEventListener('click', onCancelButtonClick);
  document.addEventListener('keydown', onPreviewEscPress);

  renderElements(commentList, socialComments);
};

export {
  picturePreview,
  renderPicturePreview,
  pictureCancelButton
};
