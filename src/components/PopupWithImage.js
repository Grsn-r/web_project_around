import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector)
        this._template = document.querySelector('#pop-up-img');
    }
    getTemplate(){
        return this._template.content.querySelector('.img-full').cloneNode(true);
    }

    getData(link, name){
        this.content = this.getTemplate();
        this.content.querySelector('.card-img').src = link;
        this.content.querySelector('.img-footer').textContent = name;
        const popupcloseIcon = this.content.querySelector('.close-icon');
        const imgPopup = document.querySelector('.img-container');
        const fade = document.querySelector('.fade');
        imgPopup.prepend(this.content);
        this.open();

        fade.addEventListener('click', ()=>{
            this.content.remove();
        })

        popupcloseIcon.addEventListener('click', ()=>{
            this.close();
            this.content.remove();
        });
        document.addEventListener('keydown', ()=>{
            this._handleEscapeClose();
            this.content.remove();
            this.close();
        })
    }

    open(){
        super.open();
    }

    close(){
        super.close();
    }

    _handleEscapeClose(){
        super._handleEscapeClose();
    }
}