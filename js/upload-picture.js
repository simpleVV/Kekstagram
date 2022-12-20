import {
  slider,
  setSliderSettings
} from './slider.js';
import {
  openPopup,
  closePopup,
  checkIsEscEvent
} from './util.js';
import {
  setPictureSize,
  reduceSizeValue,
  increaseSizeValue
} from './resize-image.js';
import {
  setImageEffectClass,
  setImageDefaultClass,
  removeImageEffects,
  setDefaultEffect,
  setEffect
} from './image-effect.js';
// import {
//   uploadData
// } from './backend.js';
// import { onSendError } from './error.js';

const imageUpload = document.querySelector('.img-upload__overlay');
const reduceSizeButton = imageUpload.querySelector('.scale__control--smaller');
const increaseSizeButton = imageUpload.querySelector('.scale__control--bigger');
const scaleControlValue = imageUpload.querySelector('.scale__control--value');
const imgUploadPreview = imageUpload.querySelector('.img-upload__preview');
const uploadImage = imgUploadPreview.querySelector('img');

const setDefaultScaleControl = () => scaleControlValue.value = '100%';

//Action with picture size
const onReduceSizeButtonClick = (evt) => {
  evt.preventDefault();
  scaleControlValue.value =
    reduceSizeValue(parseInt(scaleControlValue.value, 10));

  setPictureSize(uploadImage, parseInt(scaleControlValue.value, 10));
};

const onIncreaseSizeButtonClick = (evt) => {
  evt.preventDefault();
  scaleControlValue.value =
    increaseSizeValue(parseInt(scaleControlValue.value, 10));

  setPictureSize(uploadImage, parseInt(scaleControlValue.value, 10));
};

//Actions with effects
const effectList = imageUpload.querySelector('.effects__list');
const effectLevel = imageUpload.querySelectorAll('.effect-level__value');
const imageEffectLevel = imageUpload.querySelector('.effect-level');
let imageEffect = '';

const hideImageEffectLevel = () => {
  uploadImage.classList.contains('effects__preview--none')
    ? imageEffectLevel.classList.add('visually-hidden')
    : imageEffectLevel.classList.remove('visually-hidden');
};

slider.noUiSlider.on('update', (values, handle) => {
  effectLevel.value = values[handle];
  setEffect(uploadImage, imageEffect ,values[handle]);
});

const onEffectListChecked = (evt) => {
  if (evt.target.matches('.effects__radio')) {
    evt.preventDefault();
    imageEffect = evt.target.value;
    removeImageEffects(uploadImage);
    setImageEffectClass(uploadImage, imageEffect);
    setSliderSettings(imageEffect);
    hideImageEffectLevel();
  }
};

//Actions with upload popup
const uploadInput = document.querySelector('#upload-file');
const uploadCancelButton = imageUpload.querySelector('.img-upload__cancel');

const setDefaultSettigs = () => {
  setDefaultScaleControl();
  setDefaultEffect(uploadImage);
  removeImageEffects(uploadImage);
  setImageDefaultClass(uploadImage);
  setPictureSize(uploadImage);
  hideImageEffectLevel();
  uploadInput.value = '';
};

const closeImgUpload = () => {
  closePopup(imageUpload);

  uploadCancelButton.removeEventListener('click', onCancelButtonClick);
  document.removeEventListener('keydown', onImgUploadEscPress);
  reduceSizeButton.removeEventListener('click', onReduceSizeButtonClick);
  increaseSizeButton.removeEventListener('click', onIncreaseSizeButtonClick);
  effectList.removeEventListener('change', onEffectListChecked);
};

const onUploadInputChange = (evt) => {
  evt.preventDefault();
  setDefaultSettigs();
  openPopup(imageUpload);

  uploadCancelButton.addEventListener('click', onCancelButtonClick);
  document.addEventListener('keydown', onImgUploadEscPress);
  reduceSizeButton.addEventListener('click', onReduceSizeButtonClick);
  increaseSizeButton.addEventListener('click', onIncreaseSizeButtonClick);
  effectList.addEventListener('change', onEffectListChecked);
};

const onImgUploadEscPress  = (evt) => {
  if (checkIsEscEvent(evt)) {
    evt.preventDefault();
    closeImgUpload();
  }
};

const onCancelButtonClick = (evt) => {
  evt.preventDefault();
  closeImgUpload();
};

uploadInput.addEventListener('change', onUploadInputChange);

// const uploadForm = document.querySelector('.img-upload__form');

// const onUploadFormSubmit = (evt) => {
//   evt.preventDefault();

//   uploadData(new FormData(uploadForm), closeImgUpload, onSendError);
// };

// uploadForm.addEventListener('submit', onUploadFormSubmit);







