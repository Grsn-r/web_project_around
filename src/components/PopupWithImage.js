import Popup from "./Popup.js";

export default  class PopupWithImage extends Popup {
    contructor(popupSelector, handleFormSubmit){
        this._popup = document.querySelector(popupSelector);
    }

    open(){

    }
}