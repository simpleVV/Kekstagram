const MAX_VALUE = 100;

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

const scaleControl = document.querySelector('.scale__control--value');

const setDefaultScaleValue = () => scaleControl.value = '100%';

const changeImageSize = (picture, value = MAX_VALUE) => {
  picture.style.transform = `scale(${parseInt(value, 10) / MAX_VALUE})`;
};

const countScaleValue = (value, step) => {
  let result = value + step;

  if (result >= Scale.MAX) {
    result = Scale.MAX;
  }

  if (result <= Scale.MIN) {
    result = Scale.MIN;
  }

  return `${parseInt(result, 10)}%`;
};

const changeScaleValue = (evt) => {
  let scaleValue = parseInt(scaleControl.value, 10);

  if (evt.target.matches('.scale__control--bigger')) {
    scaleControl.value = countScaleValue(scaleValue, Scale.STEP);
  }

  if (evt.target.matches('.scale__control--smaller')) {
    scaleControl.value = countScaleValue(scaleValue, -Scale.STEP);
  }
};

export {
  changeImageSize,
  changeScaleValue,
  setDefaultScaleValue,
  scaleControl
};
