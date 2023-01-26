import './gallery.js';
import './upload-image.js';
import './form-validation.js';
import { getData } from './api.js';
import { debounce } from './util.js'
import { showServerError } from './modal.js';
import {
  fillGallery,
  clearGallery
} from './gallery.js';
import {
  showFilters,
  setFilterClick
} from './filters.js';

const FILTER_DELAY = 500;

getData(
  (pictures) => {
    showFilters();
    fillGallery(pictures);
    setFilterClick(
      pictures,
      debounce(clearGallery, FILTER_DELAY),
      debounce(fillGallery, FILTER_DELAY))
  },
  showServerError,
);
