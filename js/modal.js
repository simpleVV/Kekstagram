import {
  closePopup,
  openPopup,
  renderElement,
  checkIsEscEvent
} from './util.js';

const ERROR_SHOW_TIME = 5000;

//Get data modal error
const serverErrorTemplate = document.querySelector('#server-error')
  .content.querySelector('.error');

const showServerError = (errorStatus, message) => {
  const errorPopup = serverErrorTemplate.cloneNode(true);
  const popupInner = errorPopup.querySelector('.error__inner');
  const title = errorStatus
    ? `Ошибка: ${errorStatus}`
    : 'Ошибка';

  popupInner.style.paddingTop = '30px';
  errorPopup.querySelector('.error__code').textContent = title;
  errorPopup.querySelector('.error__message').textContent = message;

  renderElement(errorPopup);

  setTimeout(() => {
    closePopup(errorPopup);
  }, ERROR_SHOW_TIME)
};

//Send data success and error modal
const successPopupTemplate = document.querySelector('#success')
  .content.querySelector('.success');
const errorPopupTemplate = document.querySelector('#error')
  .content.querySelector('.error');

const createModalWindow = (template) => {
  const modalWindow = template.cloneNode(true);
 
  modalWindow.classList.add('hidden');
  renderElement(modalWindow);

  return modalWindow;
};

const showModalWindow = (modal) => {
  const modalButton = modal.querySelector('button');

  const onModalButtonClick = (evt) => {
    evt.preventDefault();

    closeModalWindow();
  };

  const onModalWindowESCPress = (evt) => {
    if (checkIsEscEvent(evt)) {
      evt.preventDefault();
      closeModalWindow();
    }
  };

  const onDocumentClick = (evt) => {
    if (evt.target === modal) {
      closeModalWindow();
    }
  };

  const closeModalWindow = () => {
    closePopup(modal);

    modalButton.removeEventListener('click', onModalButtonClick);
    document.removeEventListener('keydown', onModalWindowESCPress);
    document.removeEventListener('click', onDocumentClick);
  };

  modalButton.addEventListener('click', onModalButtonClick);
  document.addEventListener('keydown', onModalWindowESCPress);
  document.addEventListener('click', onDocumentClick);

  openPopup(modal);
};

const successModal = createModalWindow(successPopupTemplate);
const errorModal = createModalWindow(errorPopupTemplate);

export {
  successModal,
  errorModal,
  showModalWindow,
  showServerError
};