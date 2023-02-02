const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const createPicture = ({ url, likes, comments }) => {
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;

  return picture;
};

export { createPicture };

