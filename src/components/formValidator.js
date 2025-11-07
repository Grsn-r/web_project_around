export default class FormValidator{
    constructor(formElement ) {
        this.formElement = formElement;
}
showError = (input, errorMessage) => {
    const formError = this.formElement.querySelector(`#${input.id}-error`);
    input.classList.add("form__input_invalid");
    formError.textContent = errorMessage;
    formError.classList.add("form__input-error");
}
hideError = (input) => {
    const formError = this.formElement.querySelector(`#${input.id}-error`);
    input.classList.remove(".form__input_invalid");
    formError.classList.remove("form__input-error");
    formError.textContent = "";
}
_validateInput = (input) => {
    if (!input.validity.valid) {
        this.showError(input, input.validationMessage);
    } else {
        this.hideError(input);
    };
};
toggleButton = (inputList) => {
    const createButton = this.formElement.querySelector(".form__save-button");
    const isInputValidNP = inputList.every((input) => input.validity.valid);
    if (!isInputValidNP) {
        createButton.disabled = true;
        createButton.classList.add("form__save-button--inactive");
    } else {
        createButton.disabled = false;
        createButton.classList.remove("form__save-button--inactive")
    }
};
_setEventListeners(){
    const inputList = Array.from(this.formElement.querySelectorAll(".form__input"));
    inputList.forEach((input) => {
input.addEventListener('input', ()=> {
    this._validateInput(input);
    this.toggleButton(inputList);
})
    })
}
enableValidation(){
    this.formElement.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    })
    this._setEventListeners();
}
}