import Popup from "./popup"
export default class PopupWithConfirmation extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._confirmButton = this._popup.querySelector('.elements__popup_confirm');
        this._popup = this._popupSelector.querySelector('.elements__popup_form');
        this._submitAction = null;
    }

    setSubmitAction(action){
        this._submitAction = action;
    }

    open(){
        super.open();
        this._popup.style.display = 'flex';

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
        this._popup.style.display = 'none';
    }
}