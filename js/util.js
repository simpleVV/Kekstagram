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

const body = document.querySelector('body');

const renderElements = (elements, parent = body) => {
  const fragment = document.createDocumentFragment();

  elements.forEach((element) => {
    fragment.appendChild(element);
  });
  parent.appendChild(fragment)
};

const renderElement = (element, parent = body) => {
  const fragment = document.createDocumentFragment();

  fragment.appendChild(element);
  parent.appendChild(fragment);
};

const checkIsEscEvent = (evt) => evt.key === ('Escape' || 'Esc');
const checkIsEnterEvent = (evt) => evt.key === ('Enter');

const openPopup = (popup) => {
  popup.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closePopup = (popup) => {
  popup.classList.add('hidden');
  body.classList.remove('modal-open');
};

export {
  getRandomNumber,
  getRandomArrayElement,
  checkMaxStringLength,
  renderElements,
  renderElement,
  checkIsEscEvent,
  checkIsEnterEvent,
  openPopup,
  closePopup
}
