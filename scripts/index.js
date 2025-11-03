import {Card} from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import Section from "./Section.js"

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

const profile = document.querySelector('.profile')
const editButton = profile.querySelector('.edit-button')
const form = document.querySelector('.form')
const closeButton = form.querySelector('.form__close-icon')
const fade = document.querySelector('.fade')
const profileInfo = profile.querySelector('.profile__info')
const saveButton = form.querySelector('.save-button')
const elements = document.querySelector('.elements')

let profileName = form.querySelector('#name');
let about = form.querySelector('#about');

let nameElement = profileInfo.querySelector('.profile__info_name');
let aboutElement = profileInfo.querySelector('.profile__info_explorer');
//formulario de perfil
function showForm(){
    form.setAttribute("style", "display: flex");
    fade.setAttribute("style", "display: block");
}

function hideForm(){
    form.setAttribute("style", "display: none");
    fade.setAttribute("style", "display: none");
}

editButton.addEventListener('click', showForm);
closeButton.addEventListener('click', hideForm);
fade.addEventListener('click', hideForm);
document.addEventListener('keydown', (evt) => {
    if (evt.key === "Escape") {
        hideForm();
    }
})

function addProfileInfo(){
nameElement.textContent = profileName.value;
aboutElement.textContent = about.value;
hideForm();   
}

// validar formulario perfil

const validateProfile = new FormValidator(form);

validateProfile.enableValidation();

form.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  addProfileInfo();
  hideForm();
});

//formualrio de new card
let newPlaceForm = document.querySelector(".form--new-place");
let closeButtonNP = newPlaceForm.querySelector(".form__close-icon-NP")

function showformNewPlace(){
    newPlaceForm.setAttribute('style', 'display: flex');
    fade.setAttribute('style', 'display: block');
}

function hideFormNewPlace(){
    newPlaceForm.setAttribute('style', 'display: none');
    fade.setAttribute('style', 'display: none');
}

const ProfileAddBtn = profile.querySelector('.profile__add-button');

ProfileAddBtn.addEventListener('click',showformNewPlace);
closeButtonNP.addEventListener('click', hideFormNewPlace);

let titleNP = newPlaceForm.querySelector("#title");
let imgUrl = newPlaceForm.querySelector("#img-url");

//validacion New Card
const validateNewCard = new FormValidator(newPlaceForm);

validateNewCard.enableValidation();

newPlaceForm.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  const newCard = {
    name: titleNP.value,
    link: imgUrl.value
  }
  hideFormNewPlace();
  return newCard;
});

// nuevas cards


initialCards.forEach((item) =>{
    createCard(item.name, item.link );
});

//instancia de Section


