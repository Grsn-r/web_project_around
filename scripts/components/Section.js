export default class Section{
    constructor({items, renderer}, cardElements){
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardElements);
    }

    renderItems(){
         console.log('Renderizando items:', this._items);
        this._items.forEach((item) =>{
          const cards = this._renderer(item);
          console.log('Card creada:', cards); 
          this.addItem(cards);

        })
    }

    addItem(element){
        this._container.append(element);
    }
}