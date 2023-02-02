const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
  ENTER: 'Enter',
};

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
  parent.appendChild(fragment);
};

const renderElement = (element, parent = body) => {
  const fragment = document.createDocumentFragment();

  fragment.appendChild(element);
  parent.appendChild(fragment);
};

const checkIsEscEvent = (evt) =>
  (evt.key === Keys.ESCAPE || evt.key === Keys.ESC);
const checkIsEnterEvent = (evt) => evt.key === Keys.ENTER;

const openPopup = (popup) => {
  popup.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closePopup = (popup) => {
  popup.classList.add('hidden');
  body.classList.remove('modal-open');
};

const debounce = (cb, time) => {
  let timeout;

  return (...args) => {
    const cbCall = () => {
      cb.apply(this, args);
    }

    clearTimeout(timeout);

    timeout = setTimeout(cbCall, time);
  };
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
  closePopup,
  debounce
};
