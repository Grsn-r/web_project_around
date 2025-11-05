export default class Card{
    constructor(name, link, handleCardClick ) {
        this.name = name;
        this.link = link;
        this.handleCardClick = handleCardClick;
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
            this.eraseCard();
        });
        like.addEventListener('click', ()=> {
            like.classList.toggle("block__button-black")
        });
        img.addEventListener('click', () =>{
            this.handleCardClick({
                src: this.link,
                alt: this.name,
                caption: this.name
            });
        })
    }
}
