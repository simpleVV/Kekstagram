import { formatValueToPersent } from './util.js';

const SIZE_STEP = 25;
const MAX_SIZE = 100;

const setPictureSize = (picture, value = MAX_SIZE) => {
  picture.style.transform = `scale(${value / MAX_SIZE})`;
};

const increaseSizeValue = (value) => value === MAX_SIZE
  ? formatValueToPersent(value)
  : formatValueToPersent(value + SIZE_STEP);

const reduceSizeValue = (value) => value === SIZE_STEP
  ? formatValueToPersent(value)
  : formatValueToPersent(value - SIZE_STEP);

export {
  setPictureSize,
  reduceSizeValue,
  increaseSizeValue
};
