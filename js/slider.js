const slider = document.querySelector('.effect-level__slider');
const noUiSlider = window.noUiSlider;
const DEFAULT_MAX_VALUE = 100;
const DEFAULT_MIN_VALUE = 0;
const DEFAULT_STEP = 1;
const SEPIA_MAX_VALUE = 1;
const SEPIA_MIN_VALUE = 0;
const EFFECT_STEP = 0.1;
const HEAT_MAX_VALUE = 3;
const HEAT_MIN_VALUE = 1;
const PHOBOS_MAX_VALUE = 3;

noUiSlider.create(slider, {
  range: {
    min: DEFAULT_MIN_VALUE,
    max: DEFAULT_MAX_VALUE,
  },
  start: DEFAULT_MAX_VALUE,
  step: DEFAULT_STEP,
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
          min: DEFAULT_MIN_VALUE,
          max: DEFAULT_MAX_VALUE,
        },
        start: DEFAULT_MAX_VALUE,
        step: DEFAULT_STEP,
      });
      break;
    case 'phobos':
      slider.noUiSlider.updateOptions({
        range: {
          min: DEFAULT_MIN_VALUE,
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
        start: DEFAULT_MIN_VALUE,
      });
      break;
  }
};

export {
  slider,
  setSliderSettings
}
