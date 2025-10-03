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

// abrir imagen en grande
const images = elements.querySelectorAll(".block__img");
const imgTemplate = document.querySelector("#pop-up-img").content;
const page = document.querySelector(".page")

images.forEach((pic)=> {
    pic.addEventListener('click', (evento) => {
    const imgFull = imgTemplate.cloneNode(true);
    let imgCloseIcon = imgFull.querySelector(".close-icon");
    let picture = imgFull.querySelector(".card-img");
    let imgFtr = imgFull.querySelector(".img-footer");
    picture.src = pic.src;
    imgFtr.textContent = pic.closest(".block").querySelector(".block__ftr").textContent;
    fade.setAttribute('style', 'display: block');
    elements.prepend(imgFull);
    imgCloseIcon.addEventListener('click', () =>{
        const popUpElement = document.querySelector(".img-full");
        popUpElement.remove();
        fade.setAttribute('style', 'display: none');
    })
    document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
        const popUpElement = document.querySelector(".img-full");
        popUpElement.remove();
        fade.setAttribute('style', 'display: none');
        }
    });
    });
});
// boton me gusta
const likeButtons = elements.querySelectorAll('.block__button')

likeButtons.forEach((like) =>{
    like.addEventListener('click', () =>{
        like.classList.toggle("block__button-black")
    });
})
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
const newCardTemplate = elements.querySelector("#new-card").content;
const newCardFooter = newCardTemplate.querySelector(".block__ftr");

function addNewCard(evt){
    evt.preventDefault();
    const newCard = newCardTemplate.cloneNode(true);
    let newCardFooter = newCard.querySelector(".block__ftr");
    let newCardImg = newCard.querySelector("#user-img");
    newCardFooter.querySelector("#new-card-title").textContent = titleNP.value;
    newCardImg.src = imgUrl.value;
    let eraseButtonNP = newCard.querySelector(".block__erase-button");
    if (eraseButtonNP) {
        eraseButtonNP.addEventListener('click', () => {
            const cardToDelete = eraseButtonNP.closest(".block");
            cardToDelete.remove();
        });
    }
    let likeButtonNP = newCard.querySelector(".block__button");
    likeButtonNP.addEventListener('click', ()=>{
        likeButtonNP.classList.toggle("block__button-black");
    })
    newCardImg.addEventListener('click', () => {
    const imgFull = imgTemplate.cloneNode(true);
    let imgCloseIcon = imgFull.querySelector(".close-icon");
    let picture = imgFull.querySelector(".card-img");
    let imgFtr = imgFull.querySelector(".img-footer");
    picture.src = newCardImg.src;
    imgFtr.textContent = newCardImg.closest(".block").querySelector(".block__ftr").textContent;
    fade.setAttribute('style', 'display: block');
    elements.prepend(imgFull);
    imgCloseIcon.addEventListener('click', () =>{
        const popUpElement = document.querySelector(".img-full");
        popUpElement.remove();
        fade.setAttribute('style', 'display: none');
    })
    })
    elements.prepend(newCard);
    hideFormNewPlace();
}

createButton.addEventListener('click', addNewCard);

//borrar cards
const eraseButton = elements.querySelectorAll(".block__erase-button");

eraseButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        const card = btn.closest(".block");
        if (card) {
            card.remove();
        }
    })
})
