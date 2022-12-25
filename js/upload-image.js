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
  changePictureSize
} from './resize-image.js';
import {
  setImageEffectClass,
  setImageDefaultClass,
  removeImageEffects,
  setDefaultEffect,
  setEffect
} from './image-effect.js';

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

const imageUpload = document.querySelector('.img-upload__overlay');
const imgUploadPreview = imageUpload.querySelector('.img-upload__preview');
const uploadImage = imgUploadPreview.querySelector('img');
const scale = imageUpload.querySelector('.scale');
const scaleControl = imageUpload.querySelector('.scale__control--value');

const setDefaultScaleControl = () => scaleControl.value = '100%';

//Actions with size
const onScaleClick = (evt) => {
  evt.preventDefault();
  let scaleValue = parseInt(scaleControl.value, 10);
  
  if (evt.target.matches('.scale__control--bigger')) {
    scaleControl.value = changePictureSize(scaleValue, Scale.STEP, Scale.MAX, Scale.MIN);
  }

  if (evt.target.matches('.scale__control--smaller')) {
    scaleControl.value = changePictureSize(scaleValue, -Scale.STEP, Scale.MAX, Scale.MIN);
  }
  
  setPictureSize(uploadImage, scaleControl.value);
};

//Actions with effects
const effectList = imageUpload.querySelector('.effects__list');
const effectLevel = imageUpload.querySelector('.effect-level__value');
const imageEffectLevel = imageUpload.querySelector('.effect-level');
let imageEffect = '';

const hideImageEffectLevel = () => {
  uploadImage.classList.contains('effects__preview--none')
    ? imageEffectLevel.classList.add('visually-hidden')
    : imageEffectLevel.classList.remove('visually-hidden');
};

slider.noUiSlider.on('update', (values, handle) => {
  effectLevel.value = values[handle];
  setEffect(uploadImage, imageEffect, values[handle]);
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
const defaultEffectRadio = imageUpload.querySelector('#effect-none');

const setDefaultSettigs = () => {
  setDefaultEffect(uploadImage);
  removeImageEffects(uploadImage);
  setImageDefaultClass(uploadImage);
  setPictureSize(uploadImage);
  hideImageEffectLevel();
  uploadInput.value = '';
  defaultEffectRadio.checked = true;
};

const closeImgUpload = () => {
  setDefaultSettigs();
  closePopup(imageUpload);
  uploadCancelButton.removeEventListener('click', onCancelButtonClick);
  document.removeEventListener('keydown', onImgUploadEscPress);
  effectList.removeEventListener('change', onEffectListChecked);
  scale.removeEventListener('click', onScaleClick);
};

const onUploadInputChange = (evt) => {
  evt.preventDefault();
  setDefaultScaleControl();
  openPopup(imageUpload);
  
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

uploadInput.addEventListener('change', onUploadInputChange);






