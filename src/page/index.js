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

api.getInitialCards()
.then((cards) => {
console.log(cards);
})
.catch((err) => {
console.log(err);
});


const form = document.querySelector('.form')

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
 cardSection.renderItems(cards);
 cardSection.close();
})
.catch((err) => {
  console.log('Error en Promise.all',err);
});

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
