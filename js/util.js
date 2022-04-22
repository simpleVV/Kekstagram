const getRandomNumber = (max, min = 0) =>
  Math.floor(Math.random() * (max - min)) + min;

const checkMaxStringLength = (string, maxLength) =>
  string.length === maxLength ? true : false;

const getRandomArrayElement = (arr) => arr[getRandomNumber(arr.length)];

const renderElements = (elements, parent) => {
  const fragment = document.createDocumentFragment();

  elements.forEach((element) => {
    fragment.appendChild(element);
  });
  parent.appendChild(fragment)
};

const checkIsEscEventDone = (evt) => evt.key === ('Escape' || 'Esc');

export {
  getRandomNumber,
  checkMaxStringLength,
  getRandomArrayElement,
  renderElements,
  checkIsEscEventDone
};
