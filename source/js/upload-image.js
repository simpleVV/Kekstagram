import {
  openPopup,
  closePopup,
  checkIsEscEvent
} from './util.js';
import {
  slider,
  setSliderSettings
} from './slider.js';
import {
  changeImageSize,
  changeScaleValue,
  setDefaultScaleValue,
  scaleControl
} from './resize-image.js';
import {
  setImageEffectClass,
  setImageDefaultClass,
  removeImageEffects,
  setDefaultEffect,
  setEffect
} from './image-effect.js';
import {
  showModalWindow,
  successModal,
  errorModal
} from './modal.js';
import { sendData } from './api.js';
import { loadImage } from './load-image.js';

const imageUpload = document.querySelector('.img-upload__overlay');
const imgUploadPreview = imageUpload.querySelector('.img-upload__preview');
const uploadImage = imgUploadPreview.querySelector('img');
const scale = imageUpload.querySelector('.scale');
const uploadInput = document.querySelector('#upload-file');
const uploadCancelButton = imageUpload.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const effectsPreview = imageUpload.querySelectorAll('.effects__preview');
const effectList = imageUpload.querySelector('.effects__list');
const effectLevel = imageUpload.querySelector('.effect-level__value');
const imageEffectLevel = imageUpload.querySelector('.effect-level');
let imageEffect = '';

const setDefaultSettigs = () => {
  setDefaultEffect(uploadImage);
  removeImageEffects(uploadImage);
  setImageDefaultClass(uploadImage);
  changeImageSize(uploadImage);
  uploadForm.reset();
};

const hideImageEffectLevel = () => {
  uploadImage.classList.contains('effects__preview--none')
    ? imageEffectLevel.classList.add('visually-hidden')
    : imageEffectLevel.classList.remove('visually-hidden');
};

const closeImgUpload = () => {
  setDefaultSettigs();
  closePopup(imageUpload);
  uploadCancelButton.removeEventListener('click', onCancelButtonClick);
  document.removeEventListener('keydown', onImgUploadEscPress);
  effectList.removeEventListener('change', onEffectListChecked);
  scale.removeEventListener('click', onScaleClick);
};

slider.noUiSlider.on('update', (values, handle) => {
  effectLevel.value = values[handle];
  setEffect(uploadImage, imageEffect, values[handle]);
});

const onScaleClick = (evt) => {
  evt.preventDefault();
  changeScaleValue(evt)
  changeImageSize(uploadImage, scaleControl.value);
};

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

const onUploadInputChange = (evt) => {
  evt.preventDefault();
  setDefaultScaleValue();
  openPopup(imageUpload);
  loadImage(uploadInput, uploadImage, effectsPreview);

  imageEffectLevel.classList.add('visually-hidden');
  uploadCancelButton.addEventListener('click', onCancelButtonClick);
  document.addEventListener('keydown', onImgUploadEscPress);
  effectList.addEventListener('change', onEffectListChecked);
  scale.addEventListener('click', onScaleClick);
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

const onSuccessSubmit = () => {
  showModalWindow(successModal);
};

const onErrorSubmit = () => {
  showModalWindow(errorModal);
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(onSuccessSubmit, onErrorSubmit, new FormData(evt.target));
  closeImgUpload();
});

uploadInput.addEventListener('change', onUploadInputChange);










