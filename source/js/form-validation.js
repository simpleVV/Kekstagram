import { checkIsEscEvent } from './util.js';

const REG_WHITESPACE = /\b#/;
const REG_WITHOUT_SPECIAL = /^#[A-Za-zА-ЯЁа-яё0-9]*$/;
const MAX_SIMILAR_HASHTAG = 1;
const MAX_HASHTAGS_NUMBER = 5;
const MAX_HASHTAG_LENGTH = 20;

const hashtagInput = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');

const onInputKeydown = (evt) => {
  if (checkIsEscEvent(evt)) {
    evt.stopPropagation();
  }
};

const addErrorBorder = (inputElement) => {
  inputElement.style.borderColor = '#e90000';
};

const removeErrorBorder = (inputElement) => {
  inputElement.style.borderColor = '';
}

const validateHashtag = (value) => {
  if (value === '#') {
    return 'Хэш-тег не может состоять из #';
  }

  if (REG_WHITESPACE.test(value)) {
    return 'Хэш-теги разделяются пробелами';
  }

  if (value && !REG_WITHOUT_SPECIAL.test(value)) {
    return 'Хэш-тег должен начинатся с # и не может содержать спецсимволы'
  }

  if (value.length > MAX_HASHTAG_LENGTH) {
    return 'Максимальная длина одного хэш-тега 20 символов';
  }

  return '';
};

const onHashtagInput = () => {
  const hashtags = hashtagInput.value.split(' ');
  let messages = [];

  hashtags.forEach((hashtag, index, hashtagsArray) => {
    const similarHashtag = hashtagsArray.filter((element) =>
      element.toLowerCase() === hashtag.toLowerCase()).length;

    messages[index] = validateHashtag(hashtag);

    if (similarHashtag > MAX_SIMILAR_HASHTAG) {
      messages[index] = 'Не может быть два одинаковых хэш-тега';
    }

    if (hashtagsArray.length > MAX_HASHTAGS_NUMBER) {
      messages[index] = 'Можно указать не более 5 хэш-тегов';
    }
  });

  let errorMessage = messages.find((message) => message ? message : '');

  errorMessage ? hashtagInput.setCustomValidity(errorMessage) : hashtagInput.setCustomValidity('')

  hashtagInput.validity.valid === true
    ? removeErrorBorder(hashtagInput)
    : addErrorBorder(hashtagInput);

  hashtagInput.reportValidity();
};

hashtagInput.addEventListener('input', onHashtagInput);
hashtagInput.addEventListener('keydown', onInputKeydown);
description.addEventListener('keydown', onInputKeydown);
