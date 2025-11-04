export default class Popup{
    constructor(popupSelector){
        this._popupSelector = popupSelector;
        this._closeIcon = popupSelector.querySelector('.form__close-icon')
        this._fade = document.querySelector('.fade');
    }
    open(){
        this._popupSelector.setAttribute("style", "display: flex");
        document.addEventListener('keydown', this._handleEscapeClose());
        this._fade.setAttribute('style', 'display: block');
    }

    close(){
        this._popupSelector.setAttribute("style", "display: none");
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
        this._closeIcon.addEventListener('click', () =>{
        this.close()}); 
        this._fade.addEventListener('click', () =>{
        this.close()}); 
    }
    
}