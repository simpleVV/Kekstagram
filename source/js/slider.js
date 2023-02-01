import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const SEPIA_MAX_VALUE = 1;
const SEPIA_MIN_VALUE = 0;
const EFFECT_STEP = 0.1;
const HEAT_MAX_VALUE = 3;
const HEAT_MIN_VALUE = 1;
const PHOBOS_MAX_VALUE = 3;

const Slider = {
  MAX: 100,
  MIN: 0,
  STEP: 1,
}

const slider = document.querySelector('.effect-level__slider');

noUiSlider.create(slider, {
  range: {
    min: Slider.MIN,
    max: Slider.MAX,
  },
  start: Slider.MAX,
  step: Slider.STEP,
  format: {
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: (value) => {
      return parseFloat(value);
    },
  },
  connect: 'lower',
});

const setSliderSettings = (effect) => {
  switch (effect) {
    case 'chrome':
    case 'sepia':
      slider.noUiSlider.updateOptions({
        range: {
          min: SEPIA_MIN_VALUE,
          max: SEPIA_MAX_VALUE,
        },
        start: SEPIA_MAX_VALUE,
        step: EFFECT_STEP,
      });
      break;
    case 'marvin':
      slider.noUiSlider.updateOptions({
        range: {
          min: Slider.MIN,
          max: Slider.MAX,
        },
        start: Slider.MAX,
        step: Slider.STEP,
      });
      break;
    case 'phobos':
      slider.noUiSlider.updateOptions({
        range: {
          min: Slider.MIN,
          max: PHOBOS_MAX_VALUE,
        },
        start: PHOBOS_MAX_VALUE,
        step: EFFECT_STEP,
      });
      break;
    case 'heat':
      slider.noUiSlider.updateOptions({
        range: {
          min: HEAT_MIN_VALUE,
          max: HEAT_MAX_VALUE,
        },
        start: HEAT_MAX_VALUE,
        step: EFFECT_STEP,
      });
      break;
    default:
      slider.noUiSlider.updateOptions({
        start: Slider.MIN,
      });
      break;
  }
};

export {
  slider,
  setSliderSettings
}
