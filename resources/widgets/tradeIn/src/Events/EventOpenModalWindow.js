import EventsAbstract from "../../../../js/modules/EventsAbstract";
import {events,ElementsConfig} from "../../config";
import SelectEnabled from "../front/SelectEnabled";
import SelectChangeController from "./SelectChangeController";

export default class EventOpenModalWindow extends EventsAbstract{
    constructor(options = null)
    {
        super(options.settings);
        this.settings = this.settings?this.settings:events;

        this.value = options.event.target.value;
        this.handler.apply(this);
    }

    handler()
    {
        super.handler();

        const attributeButtonContinue = document.querySelector(`.${ElementsConfig.classes.sideWindowFront.buttonContinue}`).getAttribute('data-active');

        if(attributeButtonContinue === '0' || attributeButtonContinue === null)
        {

            new SelectEnabled(null,this.value);
            new SelectChangeController({event:{target:document.querySelector(`.${ElementsConfig.classes.modalWindow.select.mark}`)}});
        }
    }
}
