export default class Popup{
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
        this.closeIcon = this._popup.querySelector('.form__close-icon');
        this._fade = this._popup.querySelector('.fade');
    }
    open(){
        document.addEventListener('keydown', this._handleEscapeClose());
        this._fade.setAttribute('style', 'display: block');
    }

    close(){
        document.removeEventListener('keydown', this._handleEscapeClose());
        this._fade.setAttribute('style', 'display: none');
    }

    _handleEscapeClose(){
        return (evt) => {
            if (evt.key === "Escape") {
                this.close()}
            }
    }
    setEventListeners(){
        this.closeIcon.addEventListener('click', () =>{
        this.close()}); 
        this._fade.addEventListener('click', () =>{
        this.close()}); 
    }
    
}