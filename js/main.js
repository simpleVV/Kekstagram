const getRandomNumber = (max, min) =>
  min
    ? Math.floor(Math.random() * (max - min + 1)) + min
    : Math.floor(Math.random() * max + 1);

const checkMaxStringLength = (string, maxLength) =>
  string.length === maxLength
    ? true
    : false;

