import EventNextStep from "./EventNextStep";
import {ElementsConfig} from "../../config";
import EventPriceComparison from "./EventPriceComparison";
import CollectFormCallback from "../front/CollectFormCallback";
import {queryElement} from "../../../../js/common";

export default class EventTradeInCarSelected {
    constructor(price)
    {
        this.price = price;
        this.tradeInCar = {mark:`.${ElementsConfig.classes.modalWindow.select.mark}`,model:`.${ElementsConfig.classes.modalWindow.select.model}`};
        this.selects = document.querySelectorAll(`.${ElementsConfig.classes.modalWindow.step_1} select`);
        this.handler();
    }

    set tradeInCar (value)
    {
        let mark = queryElement(value.mark);
        let model = queryElement(value.model);

        let markValue = mark.options[mark.selectedIndex].innerText;
        let modelValue = model.options[model.selectedIndex].innerText;

        this._tradeInCar = `${markValue} ${modelValue}`;
    }

    get tradeInCar ()
    {
        return this._tradeInCar;
    }

    set selects (elements)
    {
        let data = [];
        elements.forEach((item)=>{
            data.push({title:item.title,value:item.value});
        });
        this._selects = data;
    }

    get selects ()
    {
        return this._selects;
    }


    collectFormCallback()
    {
        let CollectFormCallbackController = new CollectFormCallback();

        CollectFormCallbackController.setTradeInCarContent(this.tradeInCar);

        CollectFormCallbackController.setInputsValue(this.selects);
    }

    handler()
    {
        new EventNextStep({element:document.querySelector(`.${ElementsConfig.classes.modalWindow.wrapper} .${ElementsConfig.classes.modalWindow.step_1}`)});
        new EventPriceComparison(this.price);
        this.collectFormCallback();
    }
}
