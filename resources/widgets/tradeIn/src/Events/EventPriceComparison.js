import { ElementsConfig } from "../../config";

export default class EventPriceComparison {
    constructor(price) {
        price = Number(price);

        if(!price ||  typeof price !== 'number')
        {
            return;
        }

        this.price = price;
        this.cards = `.${ElementsConfig.classes.modalWindow.carCard}`
        this.handler();

    }


    set cards (selector)
    {
        this._cards = document.querySelectorAll(selector);
    }

    get cards ()
    {
        return this._cards;
    }

    comparisonPrice(oldPrice,price)
    {
        if((oldPrice - price) <= 0)
        {
            return 0;
        }

        return oldPrice - price;
    }

    handler()
    {
        this.cards.forEach((item)=>{
            let oldPrice = item.getAttribute(ElementsConfig.attributes.cardPrice);

            let containerPrice = item.querySelectorAll(`.${ElementsConfig.classes.modalWindow.carCardPriceNew} span`)[0];

            containerPrice.innerText=this.comparisonPrice(oldPrice,this.price);

        });
    }
}
