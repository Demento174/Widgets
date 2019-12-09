import EventNextStep from "./EventNextStep";
import { ElementsConfig } from "../../config";
import CollectFormCallback from "../front/CollectFormCallback";

export default class EventCarSelection {
    constructor(options)
    {

        this.card = options.event.target.parentNode;

        this.title = this.card.querySelector(`.${ElementsConfig.classes.modalWindow.carCardTitle}`).innerText;
        this.equipment = this.card.querySelector(`.${ElementsConfig.classes.modalWindow.carCardEquipment}`).innerText;
        this.price = this.card.querySelector(`.${ElementsConfig.classes.modalWindow.carCardPriceNew}`).innerText;
        this.handler();
    }

    set title (value)
    {
        this._title = value;
    }

    get title ()
    {
        return this._title;
    }

    set equipment (value)
    {
        this._equipment = value;
    }

    get equipment ()
    {
        return this._equipment;
    }

    set price (value)
    {
        this._price = value;
    }

    get price()
    {
        return this._price;
    }

    collectFormCallback()
    {
        let CollectFormCallbackController = new CollectFormCallback();

        CollectFormCallbackController.setPriceContent(this.price);
    }

    handler()
    {
        new EventNextStep({element:document.querySelector(`.${ElementsConfig.classes.modalWindow.step_2}`)});
        this.collectFormCallback();
    }

}
