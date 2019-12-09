import ApplicationSettings from "./ApplicationSettings";

export default class EventAbstract {
    constructor(options = null)
    {
        this.settings = options;
    }

    handler()
    {
        this.settings.forEach((item)=>{
            let ApplicationSettingController =  new ApplicationSettings(item.selector);
            ApplicationSettingController.handler(item)
        });

    }
}

