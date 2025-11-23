import PopupWithImage from "./PopupWithImage.js";
export default class Card{
    constructor({name, link, _id, isLiked}, handleDeleteClick, api, confirmationPopup) {
        this.name = name;
        this.link = link;
        this._id = _id;
        this.handleDeleteClick = handleDeleteClick;
        this.api = api;
        this._isLiked = isLiked;
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
    if (this._isLiked){
        this.element.querySelector(".block__button").classList.add('block__button-black');
    } else {
    this.element.querySelector(".block__button").classList.remove('block__button-black');
    }
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
            if (this._isLiked){
                this.api.unlikeCard(this._id)
                .then((updateCard)=>{
                    this._isLiked = false;
                    like.classList.remove('block__button-black')
                })
                .catch(err=>{
                    console.log('Error al quitar like', err)
                })
            } else {
                this.api.likeCard(this._id)
                .then((updateCard)=>{
                    this._isLiked = true;
                    like.classList.add('block__button-black')
                })
                .catch(err=>{
                    console.log('Error al dar like', err);
                })
            }
        });
        img.addEventListener('click', ()=>{
           const popupData = new PopupWithImage('#pop-up-img');
           popupData.getData( this.link, this.name);
        })
    }
}
