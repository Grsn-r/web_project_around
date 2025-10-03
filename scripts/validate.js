//validación de perfil
const form = document.querySelector('.form')
const formInput = Array.from(form.querySelectorAll(".form__input"));
const saveButton = form.querySelector('.save-button')

const showError = (input, errorMessage) => {
    const formError = form.querySelector(`#${input.id}-error`);
    input.classList.add("form__input_invalid");
    formError.textContent = errorMessage;
    formError.classList.add("form__input-error");
}
const hideError = (input) => {
    const formError = form.querySelector(`#${input.id}-error`);
    input.classList.remove("form__input_invalid");
    formError.classList.remove("form__input-error");
    formError.textContent = "";
}
export const validateInput = (input) => {
    if (!input.validity.valid) {
        showError(input, input.validationMessage);
    } else {
        hideError(input);
    };
};
export const toggleButton = () => {
    const isInputValid = formInput.every((input) => input.validity.valid);
    if (!isInputValid) {
        saveButton.disabled = true;
        saveButton.classList.add("save-button--inactive");
    } else {
        saveButton.disabled = false;
        saveButton.classList.remove("save-button--inactive")
    };
};

//validación de nuevas cards
let newPlaceForm = document.querySelector(".form--new-place");
const formInputNP = Array.from(newPlaceForm.querySelectorAll(".form__input"));
let createButton = newPlaceForm.querySelector(".create-button");
const showErrorNP = (input, errorMessage) => {
    const formError = newPlaceForm.querySelector(`#${input.id}-error`);
    input.classList.add("form__input_invalid");
    formError.textContent = errorMessage;
    formError.classList.add("form__input-error");
}
const hideErrorNP = (input) => {
    const formError = newPlaceForm.querySelector(`#${input.id}-error`);
    input.classList.remove("form__input_invalid");
    formError.classList.remove("form__input-error");
    formError.textContent = "";
}
export const validateInputNP = (input) => {
    if (!input.validity.valid) {
        showErrorNP(input, input.validationMessage);
    } else {
        hideErrorNP(input);
    };
};
export const toggleButtonNP = () => {
    const isInputValidNP = formInputNP.every((input) => input.validity.valid);
    if (!isInputValidNP) {
        createButton.disabled = true;
        createButton.classList.add("create-button--inactive");
    } else {
        createButton.disabled = false;
        createButton.classList.remove("create-button--inactive")
    }
};