import {ElementsConfig, events} from "../../config";
import EventsAbstract from "../../../../js/modules/EventsAbstract";

export default class EventRollUpOpen extends EventsAbstract{
    constructor(options = null)
    {
        super(options);
        this.settings = this.settings?this.settings:events.rollUpOpen.settings;

        this.handler.apply(this);
    }

    handler() {
        super.handler();
        let buttonContinue = document.querySelector(`.${ElementsConfig.classes.sideWindowFront.buttonContinue}`);
        let select = document.querySelector(`.${ElementsConfig.classes.sideWindowFront.select}`);

        if(buttonContinue.getAttribute('data-active') === '1')
        {

            buttonContinue.style.display='block';
            select.style.display = 'none';
        }
    }
}
