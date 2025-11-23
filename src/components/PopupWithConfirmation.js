import Popup from "./popup.js"
export default class PopupWithConfirmation extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._confirmButton = this._popup.querySelector('.elements__popup_confirm');
        this._submitAction = null;
        this._popupErase = this._popup.querySelector('.elements__popup_form');
    }

    open(){
        super.open();
        this._popupErase.style.display = 'flex';
        console.log('form encontrado',this._popupErase);
    }

    setSubmitAction(action){
        if (typeof action === 'function'){
           this._submitAction = action;
        }
        
    }
    setEventListeners(){
        super.setEventListeners();
        this._confirmButton.addEventListener('click', ()=>{
            if (this._submitAction){
                this._submitAction();
            }
        })
    }

    close(){
        super.close();
        this._popupErase.style.display = 'none'
    }
}