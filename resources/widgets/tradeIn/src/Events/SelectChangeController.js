import GetItemsClass from "../connect/GetItemsClass";
import SelectChangeAbstract from "../front/SelectChangeAbstract";
import SelectEnabled from "../front/SelectEnabled";
import SelectDisabled from "../front/SelectDisabled";
import EventNextStep from "./EventNextStep";
import EventPriceComparison from "./EventPriceComparison";
import {ElementsConfig} from "../../config";
import EventTradeInCarSelected from "./EventTradeInCarSelected";

export default class SelectChangeController {
    constructor(options) {

        if(!options.event || options.event.target.value === '0')
        {
            return;
        }

        this.select = options.event.target;

        this.data = this.select;

        this.action = this.select;

        this.nextSelect = this.select;

        this.handler();
    }

    set nextSelect (select)
    {
        let SelectChangeAbstractController = new SelectChangeAbstract(select);

        this._nextSelect = SelectChangeAbstractController.nextSelect;
    }

    get nextSelect ()
    {
        return this._nextSelect;
    }

    set action (element)
    {
        this._action = element.action;
    }

    get action ()
    {
        return this._action;
    }

    set data (select)
    {
        let data ={};
        let SelectChangeAbstractController = new SelectChangeAbstract(select);
        let prevSelects = SelectChangeAbstractController.allPrevSelect;

        data[select.title] = select.value;

        prevSelects.forEach((item)=>{
            data[item.title]= item.value;
        });

        this._data = data;
    }

    get data ()
    {
        return this._data;
    }


    async handler()
    {
        const response  = await new GetItemsClass({table:this.action,data:this.data});

        if(response.price)
        {
            new EventTradeInCarSelected(response.price);
            return;
        }

        let SelectChangeAbstractController = new SelectChangeAbstract(this.select);

        SelectChangeAbstractController.allNextSelect.forEach((item)=>{
            new SelectDisabled(item);
        });

        if(this.nextSelect)
        {
            let SelectEnabledController = new SelectEnabled(this.nextSelect,'0',response);
            this.nextSelect.value ="0";
        }
    }
}
