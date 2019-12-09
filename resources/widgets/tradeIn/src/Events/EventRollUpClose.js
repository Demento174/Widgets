import { events,ElementsConfig } from '../../config';
import EventsAbstract from "../../../../js/modules/EventsAbstract";


export default class EventRollUpClose extends EventsAbstract{
    constructor(options = null)
    {
        super(options);
        this.settings = this.settings?this.settings:events.rollUpClose.settings;

        this.handler.apply(this);
    }

    handler()
    {
        super.handler();
        let buttonContinue = document.querySelector(`.${ElementsConfig.classes.sideWindowFront.buttonContinue}`);

        if(buttonContinue.getAttribute('data-active') === '1')
        {

            buttonContinue.style.display='none';
        }
    }

}
