let profile = document.querySelector('.profile')
let editButton = profile.querySelector('.edit-button')
let form = document.querySelector('.form')
let closeButton = form.querySelector('.form__close-icon')
let fade = document.querySelector('.fade')

function showForm(){
    form.setAttribute("style", "display: flex");
    fade.setAttribute("style", "display: block");
}

function hideForm(){
    form.setAttribute("style", "display: none");
    fade.setAttribute("style", "display: none")
}

editButton.addEventListener('click', showForm);
closeButton.addEventListener('click', hideForm);