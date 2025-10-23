import {Cards} from "./Class.js";

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
    saveButton.disabled = true;
    saveButton.classList.add('save-button--inactive');
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

function addProfileInfo(evt){
evt.preventDefault();
nameElement.textContent = profileName.value;
aboutElement.textContent = about.value;
hideForm();   
}

// validar formulario perfil
const formInput = Array.from(form.querySelectorAll(".form__input"));

import { validateInput, toggleButton } from "./validate.js"

formInput.forEach((input) => {
    input.addEventListener("input", () => {
    validateInput(input);
    toggleButton();
});
});
saveButton.addEventListener('click',addProfileInfo);

//formualrio de new card
let newPlaceForm = document.querySelector(".form--new-place");
let closeButtonNP = newPlaceForm.querySelector(".form__close-icon-NP")

function showformNewPlace(){
    newPlaceForm.setAttribute('style', 'display: flex');
    fade.setAttribute('style', 'display: block');
    createButton.classList.add("create-button--inactive");
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
let createButton = newPlaceForm.querySelector(".create-button");
//validacion NP
const formInputNP = Array.from(newPlaceForm.querySelectorAll(".form__input"));

import { validateInputNP, toggleButtonNP } from "./validate.js"

formInputNP.forEach((input) => {
    input.addEventListener("input", () => {
    validateInputNP(input);
    toggleButtonNP();
});
});
createButton.addEventListener('click',addProfileInfo);
fade.addEventListener('click', hideFormNewPlace);
document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        hideFormNewPlace();
    }
})
//clonar template para crear nuevas cards
const createCard = ( name, link ) => {
    const cardElement = new Cards(name, link).getCard();
    elements.prepend(cardElement);
}
initialCards.forEach((item) =>{
    createCard(item.name, item.link );
});

createButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    createCard(titleNP.value, imgUrl.value );
    hideFormNewPlace();
});
