import Popup from "./popup.js";

export default  class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup__image');
        this._caption = this._popup.querySelector('.popup__caption');
    }
    
    open(imageData) {
        this._image.src = imageData.src;
        this._image.alt = imageData.alt;
        this._caption.textContent = imageData.caption;
    
        super.open();
    }
}