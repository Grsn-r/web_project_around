import Popup from "./popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, handleFormSubmit){
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.form') || this._popup.querySelector('.form--new-place');
    }

    open(){
        super.open();
        this._form.reset();
        this._form.setAttribute('style', 'display: flex');
        this._form.classList.add('popup_opened');
    }

     _getInputValues() {
        const inputList = this._form.querySelectorAll('.form__input');
        const formValues = {};
        
        inputList.forEach(input => {
            formValues[input.id] = input.value;
        });
        return formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    close(){
        this._form.setAttribute('style', 'display: none');
        this._form.classList.remove('popup_opened');
        this._form.reset();
        super.close();
    }
}