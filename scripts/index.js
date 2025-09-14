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
//formulario de usuario
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

function addProfileInfo(evt){
evt.preventDefault();
nameElement.textContent = profileName.value;
aboutElement.textContent = about.value;
hideForm();   
}
saveButton.addEventListener('click',addProfileInfo);

function validateContent(){
if ((profileName.value === "") || (about.value === "")) {
    saveButton.disabled = true;
    saveButton.classList.add('save-button--inactive');
} else {
    saveButton.disabled = false;
    saveButton.classList.remove('save-button--inactive');
}
}

profileName.addEventListener('input', validateContent);
about.addEventListener('input', validateContent);
// boton me gusta
const likeButton = elements.querySelector('.block__button')

function likedPicture(){
    likeButton.classList.toggle('block__button-black');
}

likeButton.addEventListener('click', likedPicture);
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

function validateContentNP(){
if ((titleNP.value === "") || (imgUrl.value === "")) {
    createButton.disabled = true;
} else {
    createButton.disabled = false;
    createButton.classList.add(".create-button");
}
}
//clonar cartas
const newCardTemplate = elements.querySelector("#new-card").content;
const newCardFooter = newCardTemplate.querySelector(".block__ftr");

const newCard = newCardTemplate.cloneNode(true);
    newCard.querySelector("#user-img").src = imgUrl.value;
    newCardFooter.querySelector("#new-card-title").textContent = titleNP.value;

function addNewCard(evt){
    evt.preventDefault();
    elements.prepend(newCard);
    hideFormNewPlace();
}

createButton.addEventListener('click', addNewCard);