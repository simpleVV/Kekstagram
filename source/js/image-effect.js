const setImageEffectClass = (image, effect) => {
  image.classList.add(`effects__preview--${effect}`)
};

const removeImageEffects = (image) => image.classList = '';
const setDefaultEffect = (image) => image.style.filter = 'none';
const setImageDefaultClass = (image) =>
  image.classList.add('effects__preview--none');

const setEffect = (image, effect, value) => {
  switch (effect) {
    case 'chrome':
      image.style.filter = `grayscale(${value})`;
      break;
    case 'sepia':
      image.style.filter = `sepia(${value})`;
      break;
    case 'marvin':
      image.style.filter = `invert(${value}%)`;
      break;
    case 'phobos':
      image.style.filter = `blur(${value}px)`;
      break;
    case 'heat':
      image.style.filter = `brightness(${value})`;
      break;
    default:
      image.style.filter = 'none';
      break;
  }
};

export {
  setImageEffectClass,
  setImageDefaultClass,
  removeImageEffects,
  setDefaultEffect,
  setEffect
};
