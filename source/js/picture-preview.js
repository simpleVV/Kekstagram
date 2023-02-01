import { renderElements, checkIsEscEvent, closePopup } from './util.js';

const MAX_ADD_COMMENT = 5;
let commentList;
let currentComments;
let lastCommentNum;

const picturePreview = document.querySelector('.big-picture');
const socialComment = picturePreview.querySelector('.social__comment');
const cancelButton = picturePreview.querySelector('.big-picture__cancel');
const loaderButton = picturePreview.querySelector('.comments-loader');
const socialComments = picturePreview.querySelector('.social__comments');
const commentsCount = picturePreview.querySelector('.social__comment-count');

const countNextPosition = (comments, currentLength, count) => {
  if (currentLength >= comments.length) {
    return currentLength;
  }

  const diff = (currentLength + count) - comments.length;

  return (currentLength + count > comments.length)
    ? currentLength + count - diff
    : currentLength + count;
};

const hideLoaderButton = (current, total) => {
  current !== total
    ? loaderButton.classList.remove('hidden')
    : loaderButton.classList.add('hidden');
};

const setCurrentCommentsCount = (current, total) => {
  commentsCount.innerHTML =
      `${current} из
        <span class="comments-count">${total}</span>
      комментариев`;
};

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
  cancelButton.removeEventListener('click', onCancelButtonClick);
  loaderButton.removeEventListener('click', onLoaderButtonClick);
};

const renderNextComments = () => {
  let nextComments = commentList.slice(lastCommentNum, lastCommentNum + MAX_ADD_COMMENT);

  lastCommentNum = countNextPosition(commentList, lastCommentNum, MAX_ADD_COMMENT);

  setCurrentCommentsCount(lastCommentNum, commentList.length);
  renderElements(nextComments, socialComments);
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

const onLoaderButtonClick = (evt) => {
  evt.preventDefault();
  renderNextComments();
  hideLoaderButton(lastCommentNum, commentList.length);
};

const showPicturePreview = ({ url, likes, comments, description }) => {
  commentList = comments.map((comment) => createPictureComment(comment));
  currentComments = commentList.slice(0, MAX_ADD_COMMENT);
  lastCommentNum = currentComments.length;

  picturePreview.querySelector('img').src = url;
  picturePreview.querySelector('.likes-count').textContent = likes;
  picturePreview.querySelector('.social__caption').textContent = description;

  socialComments.innerHTML = '';
  setCurrentCommentsCount(lastCommentNum, commentList.length);
  renderElements(currentComments, socialComments);
  hideLoaderButton(lastCommentNum, commentList.length);

  cancelButton.addEventListener('click', onCancelButtonClick);
  document.addEventListener('keydown', onPreviewEscPress);
  loaderButton.addEventListener('click', onLoaderButtonClick);
};

export {
  picturePreview,
  showPicturePreview,
  cancelButton
};
