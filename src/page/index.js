import Card from "../components/Card.js";
import FormValidator from "../components/formValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithform.js";
import UserInfo from "../components/UserInfo.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

const form = document.querySelector('.form')

const userInfo = new UserInfo({name:'.profile__info_name', job:'.profile__info_explorer'});
userInfo.getUserInfo();

//formulario de perfil

const editProfilePopup = new PopupWithForm('#edit-popup', (formData)=>{
    userInfo.setUserInfo(formData);
});
editProfilePopup.setEventListeners();

const editButton = document.querySelector('.edit-button');
editButton.addEventListener('click', ()=>{
  editProfilePopup.open();
})

// validar formulario perfil

const validateProfile = new FormValidator(form);
validateProfile.enableValidation();


//popup de imagenes

// cards

const createCard = ({name, link}) => {
    const cardElement = new Card({name, link}).getCard();
    return cardElement;
}

const cardSection = new Section({items: initialCards, 
  renderer: (cardData) => {
    return createCard(cardData);
  }
}, '.elements');
cardSection.renderItems();

//formualrio de new card
let newPlaceForm = document.querySelector('.form--new-place');

const newCardPopup = new PopupWithForm('#add-card-popup', (cardData)=>{
  const modifiedData = {
    name: cardData.title,
    link: cardData['img-url']
  }
  const newCard = createCard(modifiedData);
  cardSection.addItem(newCard);
});
newCardPopup.setEventListeners();

const addCardButton = document.querySelector('.profile__add-button');

addCardButton.addEventListener('click', ()=>{
  newCardPopup.open();
});

//validacion New Card
const validateNewCard = new FormValidator(newPlaceForm);
validateNewCard.enableValidation();
