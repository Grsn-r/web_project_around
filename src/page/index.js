import Card from "../components/Card.js";
import FormValidator from "../components/formValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithform.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const api = new Api({
  baseUrl: 'https://around-api.es.tripleten-services.com/v1',
  headers: {
    authorization: '88bf8be5-e58e-46db-961b-c33270fb62a8',
    'Content-Type': 'application/json'
  }
});

// cards

const createCard = ({name, link}) => {
    const cardElement = new Card({name, link}).getCard();
    return cardElement;
}

const cardSection = new Section({items: [], 
  renderer: (cardData) => {
    return createCard(cardData);
  }
}, '.elements');
Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([userData, cards]) => {
 userInfo.setUserInfo(userData);
 cardSection._items = cards;
 cardSection.renderItems();
})
.catch((err) => {
  console.log('Error en Promise.all',err);
});

//editar avatar

const avatarPopup = document.querySelector('.profile__popup');
const avatar = document.querySelector('.profile__avatar');
const editAvatarButton = document.querySelector('.profile__avatar_edit');
const form = document.querySelector('.form');

//validar edicion de avatar
const validateAvatar = new FormValidator(avatarPopup);
validateAvatar.enableValidation();


avatar.addEventListener('mouseenter', ()=>{
  avatar.style.opacity = '80%';
  editAvatarButton.style.display = 'flex';
  editAvatarButton.addEventListener('mouseenter', ()=>{
    avatar.style.opacity = '80%';
    editAvatarButton.style.display = 'flex';
  })
});

avatar.addEventListener('mouseleave', ()=>{
  avatar.style.opacity = '100%';
  editAvatarButton.style.display = 'none';
})

const popupAvatar = new PopupWithForm('#profile__popup', (formData)=>{
  const submitButton = popupAvatar._form.querySelector('#form__save-button');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Guardando...';
  const avatarData = {
    avatar: formData['avatar-url']
  };
  api.updateAvatar(avatarData)
  .then((updateData)=>{
    avatar.src = updateData.avatar;
    popupAvatar.close();
  })
  .catch((err)=>{
    console.log('Error al actualizar avatar:', err);
  })
  .finally(()=>{
    submitButton.textContent = originalText;
  })
})
popupAvatar.setEventListeners();

editAvatarButton.addEventListener('click', ()=>{
  popupAvatar.open();
})

// user info 
const userInfo = new UserInfo({name:'.profile__info_name', job:'.profile__info_explorer'});
userInfo.getUserInfo();

//formulario de perfil

const editProfilePopup = new PopupWithForm('#edit-popup', (formData)=>{
  const submitButton = editProfilePopup._form.querySelector('#form__save-button');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Guardando...';
    api.updateUserInfo(formData)
    .then((userData)=>{
      userInfo.setUserInfo(userData);
      editProfilePopup.close();
    })
    .catch((err)=>{
      console.error(`Error al actualizar perfil:`, err);
    })
    .finally(()=>{
      submitButton.textContent = originalText;
    })
});
editProfilePopup.setEventListeners();

// validar formulario perfil
const validateProfile = new FormValidator(form);

const editButton = document.querySelector('.edit-button');
editButton.addEventListener('click', ()=>{
  editProfilePopup.open();
  validateProfile.enableValidation();
})



//formualrio de new card
let newPlaceForm = document.querySelector('.form--new-place');

const newCardPopup = new PopupWithForm('#add-card-popup', (cardData)=>{
  const submitButton = editProfilePopup._form.querySelector('#form__save-button');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Guardando...';
  const modifiedData = {
    name: cardData.title,
    link: cardData['img-url']
  }
  api.addCard(modifiedData)
  .then((newCardData)=>{
    const newCard = createCard(newCardData);
    cardSection.addItem(newCard);
    newCardPopup.close();
  })
  .catch((err)=>{
    console.log('Error al crear tarjeta:', err);
  })
  .finally(()=>{
    submitButton.textContent = originalText;
  })
});
newCardPopup.setEventListeners();

const addCardButton = document.querySelector('.profile__add-button');

addCardButton.addEventListener('click', ()=>{
  newCardPopup.open();
});

//validacion New Card
const validateNewCard = new FormValidator(newPlaceForm);
validateNewCard.enableValidation();
