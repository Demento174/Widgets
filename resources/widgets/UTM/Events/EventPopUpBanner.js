import EventAbstract from "../../../js/modules/EventsAbstract";
import {Events} from "../config";


export default class EventPopUpBanner extends EventAbstract{
    constructor(options=null)
    {
        super(options);
        this.settings = this.settings?this.settings:Events.popUpBanner.settings;
        this.handler.apply(this);
    }


    handler()
    {
        super.handler();

    }
}
