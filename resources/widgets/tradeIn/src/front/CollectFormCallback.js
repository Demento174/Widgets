import {ElementsConfig} from "../../config";
import { queryElement } from "../../../../js/common";

export default class CollectFormCallback {
    constructor(wrapper = null)
    {
        this.wrapper = wrapper;
        this.tradeInCarElement = `.${ElementsConfig.classes.modalWindow.step_3ContentTradeInCar}`;
        this.parserCarElement = `.${ElementsConfig.classes.modalWindow.step_3ContentParserCar}`;
        this.priceElement = `.${ElementsConfig.classes.modalWindow.step_3ContentPrice}`;
    }

    set wrapper (value)
    {
        if(!value)
        {
            this._wrapper = document.querySelector(`.${ElementsConfig.classes.modalWindow.step_3}`);
        }else
            {
                this._wrapper = queryElement(value);
            }
    }

    get wrapper ()
    {
        return this._wrapper;
    }

    set tradeInCarElement (value)
    {
        this._tradeInCarElement = queryElement(value);
    }

    get tradeInCarElement ()
    {
        return this._tradeInCarElement;
    }

    set parserCarElement (value)
    {
        this._parserCarElement = queryElement(value);
    }

    get parserCarElement ()
    {
        return this._parserCarElement;
    }

    set priceElement (value)
    {
        this._priceElement = queryElement(value);
    }

    get priceElement ()
    {
        return this._priceElement;
    }

    setTradeInCarContent(value)
    {
        this.tradeInCarElement.innerText = value;
    }

    setParserCarContent(value)
    {
        this.parserCarElement.innerText = value;
    }

    setPriceContent(value)
    {
        this.priceElement.innerText = value;
    }

    setInputsValue(data)
    {
        data.forEach((item)=>{
           let input = this.wrapper.querySelector(`[name=_${item.title}]`);
            input.value = item.value;
        });
    }
}
