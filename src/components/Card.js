import PopupWithImage from "./PopupWithImage.js";
export default class Card{
    constructor({name, link, _id}, handleDeleteClick, api, confirmationPopup) {
        this.name = name;
        this.link = link;
        this._id = _id;
        this.handleDeleteClick = handleDeleteClick;
        this.api = api;
        this.confirmationPopup = confirmationPopup;
        this.template = document.querySelector("#new-card").content.querySelector(".block");
    }
    getCloneCard(){
        return this.template.cloneNode(true);
    }
    getCard(){
        this.element = this.getCloneCard();
        this.element.querySelector("#new-card-title").textContent = this.name
        this.element.querySelector(".block__img").src = this.link
        this.setEventListeners(this.element.querySelector(".block__erase-button"), 
    this.element.querySelector(".block__button"),
    this.element.querySelector(".block__img"));
        return this.element;
    }
    eraseCard(){
        this.element.remove();
    }
    setEventListeners(erase, like, img){
        erase.addEventListener('click', () => {
            this.confirmationPopup.setSubmitAction(()=>{
                this.api.eraseCard(this._id)
                .then(()=>{
                    this.eraseCard();
                    this.confirmationPopup.close();
                })
                .catch(err=>{console.log('Error al intentar borrar tarjeta',err);})
            })
            this.confirmationPopup.open();
        });
        like.addEventListener('click', ()=> {
            like.classList.toggle("block__button-black")
        });
        img.addEventListener('click', ()=>{
           const popupData = new PopupWithImage('#pop-up-img');
           popupData.getData( this.link, this.name);
        })
    }
}
