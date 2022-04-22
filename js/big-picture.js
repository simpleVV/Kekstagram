import { renderElements, checkIsEscEventDone } from './util.js';

const body = document.querySelector('body');
const bigPicture = body.querySelector('.big-picture');
const socialComment = bigPicture.querySelector('.social__comment');
const pictureCancelButton = bigPicture.querySelector('.big-picture__cancel');

const createPictureComment = ({avatar, message}) => {
  const comment = socialComment.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const onPreviewEscPress = (evt) => {
  if (checkIsEscEventDone(evt)) {
    evt.preventDefault();
    closePicturePreview();
  }
};

const onCancelButtonClick = (evt) => {
  evt.preventDefault();
  closePicturePreview();
}

const closePicturePreview = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  pictureCancelButton.removeEventListener('keydown', onPreviewEscPress);
  pictureCancelButton.removeEventListener('click', onCancelButtonClick);
};

const openPicturePreview = ({ url, likes, comments }) => {
  const commentsCount = bigPicture.querySelector('.comments-count');
  const socialComments = bigPicture.querySelector('.social__comments');
  const commentElements = comments.map((comment) =>
    createPictureComment(comment));

  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  commentsCount.textContent = comments.length;
  socialComments.innerHTML = '';

  pictureCancelButton.addEventListener('click', closePicturePreview);
  document.addEventListener('keydown', onPreviewEscPress);

  renderElements(commentElements, socialComments);
};



export { openPicturePreview };
