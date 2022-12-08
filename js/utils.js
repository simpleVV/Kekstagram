const getRandomNumber = (max, min = 0) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (arr) => arr[getRandomNumber(arr.length - 1)];

const checkMaxStringLength = (string, maxLength) => string.length <= maxLength;

export {
  getRandomNumber,
  getRandomArrayElement,
  checkMaxStringLength
}
