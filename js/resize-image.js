const MAX_VALUE = 100;

const setPictureSize = (picture, value = MAX_VALUE) => {
  picture.style.transform = `scale(${parseInt(value, 10) / MAX_VALUE})`;
};

const changePictureSize = (value, step, maxSize, minSize) => {
  let result = value + step;

  if (result >= maxSize) {
    result = maxSize;
  }

  if (result <= minSize) {
    result = minSize;
  }

  return `${parseInt(result, 10)}%`;
};

export {
  setPictureSize,
  changePictureSize
}
