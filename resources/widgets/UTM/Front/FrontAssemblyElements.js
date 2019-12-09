import { Elements } from "../config";
import CreateElements from "../../../js/modules/CreateElement";
export default class FrontAssemblyElements {
    constructor(options=null)
    {
        this.settings = !options?Elements:options;

        this.modalBanner = new CreateElements(this.settings);

        this.handler();
    }

    handler()
    {
        document.querySelector('body').append(this.modalBanner);
    }
}
