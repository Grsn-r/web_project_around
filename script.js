const profile = document.querySelector('.profile')
const editButton = profile.querySelector('.edit-button')
const form = document.querySelector('.form')
const closeButton = form.querySelector('.form__close-icon')
const fade = document.querySelector('.fade')

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

const profileInfo = profile.querySelector('.profile__info')
const saveButton = form.querySelector('.save-button')

function addProfileInfo(evt){
evt.preventDefault();
let name = form.querySelector('.name');
let about = form.querySelector('.about');

let nameElement = profileInfo.querySelector('.profile__info_name');
let aboutElement = profileInfo.querySelector('.profile__info_explorer');

nameElement.textContent = name.value;
aboutElement.textContent = about.value;
hideForm();   
}
saveButton.addEventListener('click',addProfileInfo);