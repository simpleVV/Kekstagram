import './gallery.js';
import './upload-image.js';
import './form-validation.js';
import { getData } from './api.js';
import { fillGallery } from './gallery.js';
import { showServerError } from './modal.js';

getData(fillGallery, showServerError);



