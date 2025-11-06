export default class Card{
    constructor({name, link}) {
        this.name = name;
        this.link = link;
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
    setEventListeners(erase, like){
        erase.addEventListener('click', () => {
            this.eraseCard();
        });
        like.addEventListener('click', ()=> {
            like.classList.toggle("block__button-black")
        });
    }
}
