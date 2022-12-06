const getRandomNumber = (min = 0, max = 0) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkMaxStringLength = (string, maxLength) => string.length <= maxLength;
