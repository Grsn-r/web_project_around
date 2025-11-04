export class Card{
    constructor(name, link, handleCardClick ) {
        this.name = name;
        this.link = link;
        this.handleCardClick = handleCardClick;
        this.elements = document.querySelector('.elements');
        this.template = document.querySelector("#new-card").content.querySelector(".block");
    }
    getCloneCard(){
        return this.template.cloneNode(true);
    }
    getCard(){
        this.element = this.getCloneCard();
        this.element.querySelector(".block__ftr p").textContent = this.name
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


    getFullImage(){
        const imgFull = this.imgTemplate.cloneNode(true);
        const imgCloseIcon = imgFull.querySelector(".close-icon");
        const picture = imgFull.querySelector(".card-img");
        const imgFtr = imgFull.querySelector(".img-footer");

        picture.src = this.link;
        imgFtr.textContent = this.name;
        this.fade.setAttribute('style', 'display: block');
        this.elements.prepend(imgFull);

        this.fade.addEventListener('click', (evt) => {
            if (evt.target === this.fade) {
                this.closeFullImage();
            }
        })

        imgCloseIcon.addEventListener('click', () => {
            this.closeFullImage();
        })
        document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
        }
        });
    }
    closeFullImage(){
        const popUpElement = document.querySelector(".img-full");
        if (popUpElement) {
            popUpElement.remove();
            this.fade.setAttribute('style', 'display: none');
        }
    }

