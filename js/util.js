const getRandomNumber = (max, min = 0) =>
  Math.floor(Math.random() * (max - min)) + min;

const checkMaxStringLength = (string, maxLength) =>
  string.length === maxLength ? true : false;

const getRandomArrayElement = (arr) => arr[getRandomNumber(arr.length)];

// const renderElement = (element, parent) => {
//   const fragment = document.createDocumentFragment();
//   fragment.appendChild(element);
//   parent.appendChild(fragment)
// };

export { getRandomNumber, checkMaxStringLength, getRandomArrayElement };
