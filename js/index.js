const formElement = document.querySelector('.form');
const formAdd = document.querySelector('#form-add');
const buttonElement = document.querySelector('.form__submit');

// функция очистки формы 
function resetFormAdd(formAdd) {
    formElement.reset();
  }
// submit
const submitEditProfileForm = evt => {
  evt.preventDefault();
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add('.form__submit_inactive');
  resetFormAdd();
  openPopup();
}
formElement.addEventListener('submit', submitEditProfileForm);

const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

// Открытие попап 
function openPopup () {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
  popup.addEventListener('click', closePopupOnOverlay);
};

// Закрытие попапов
function closePopup() {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
  popup.removeEventListener('click', closePopupOnOverlay);
}

// закрытие попап кликом на оверлей
function closePopupOnOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// закрытие попап нажатием на esc
function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// закрытие попапа на x
closeButton.addEventListener('click', () => closePopup());

