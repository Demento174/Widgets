import GetItemsClass from "../connect/GetItemsClass";
import EventClearWidget from "./EventClearWidget";
import {ElementsConfig} from "../../config";
export default class EventSendForm {
    constructor(options)
    {
        options.event.preventDefault();
        this.data = document.querySelectorAll(`.${ElementsConfig.classes.modalWindow.step_3} input`);
        this.handler();
    }

    set data (elements)
    {
        let data =[];
        elements.forEach((item)=>{
            data.push({title:item.name,value:item.value})
        });

        this._data = data;
    }

    get data ()
    {
        return this._data;
    }

    async handler()
    {
        let response = await new GetItemsClass({table:'form',data:this.data});
        new EventClearWidget();

    }
}
