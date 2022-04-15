const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const socialComment = document.querySelector('.social__comment');


bigPicture.classList.remove('hidden');
body.classList.add('modal-open');

const createPictureComment = (commentData) => {
  const comment = socialComment.cloneNode(true);
  const commentPicture = comment.querySelector('.social__picture');
  const commentText = comment.querySelector('.social__text');

  // const
};

const showPicturePreview = ({url, likes, comments}) => {
  const pictureImg = bigPicture.querySelector('img');
  const likesCount = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const socialComments = bigPicture.querySelector('.social__comments');

  // const pi

  pictureImg.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialComments.innerHTML = '';
};

export { showPicturePreview };
