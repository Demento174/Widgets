import EventsAbstract from "../../../../js/modules/EventsAbstract";
import {events,ElementsConfig} from "../../config";


export default class EventCloseModalWindow extends EventsAbstract{
    constructor(options = null)
    {
        super(options);
        this.settings = events.closeModalWindow.settings;

        this.handler.apply(this);
    }

    handler()
    {
        super.handler();
        let buttonContinue = document.querySelector(`.${ElementsConfig.classes.sideWindowFront.buttonContinue}`);
        buttonContinue.setAttribute('data-active','1');
    }
}
