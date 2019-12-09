import {ElementsConfig, events} from "../../config";
import EventsAbstract from "../../../../js/modules/EventsAbstract";
import SelectChangeAbstract from "../front/SelectChangeAbstract";
import SelectDisabled from "../front/SelectDisabled";

export default class EventClearWidget extends EventsAbstract{
    constructor(options = null)
    {
        super(options);
        this.settings = this.settings?this.settings:events.clearWidget.settings;

        this.handler.apply(this);
    }

    clearSelect()
    {
        let selectMark = document.querySelector(`.${ElementsConfig.classes.modalWindow.select.mark}`);

        let SelectChangeAbstractController = new SelectChangeAbstract(selectMark,'0');
        SelectChangeAbstractController.allNextSelect.forEach((item)=>{
            new  SelectDisabled(item,'0');
        });
        selectMark.disabled = true;
        selectMark.value = 0;
    }

    clearInput()
    {
        let inputs = document.querySelectorAll(`.${ElementsConfig.classes.modalWindow.step_3} input`);
        inputs.forEach((item)=>{
            item.value = '';
        });
    }

    handler()
    {
        super.handler();

        this.clearSelect();

        this.clearInput();


    }
}
