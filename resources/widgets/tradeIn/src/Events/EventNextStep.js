import { ElementsConfig } from "../../config";
import Animations from "../../../../js/modules/Animations";
import ApplicationSettings from "../../../../js/modules/ApplicationSettings";
import SwitchButtonBackStep from "./SwitchButtonBackStep";

export default class EventNextStep {
    constructor(options)
    {
        if(!options.element)
        {
            return;
        }

        this.element = options.element;

        this.step = !options.step?ElementsConfig.settings.step:options.step;
        this.stepUnit = !options.stepUnit?ElementsConfig.settings.stepUnit:options.stepUnit;

        this.nextElement = this.element;

        if(this.nextElement)
        {
            this.handler();
        }
    }

    set element (element)
    {
        if(typeof element === 'string')
        {
            this._element = document.querySelector(element);
        }else
            {
                this._element = element;
            }
    }

    get element ()
    {
        return this._element;
    }



    set nextElement (element)
    {
        this._nextElement = element.nextElementSibling;
    }

    get nextElement ()
    {
        return this._nextElement;
    }



    handler()
    {

        Animations.prototype.horizontalMixing(this.nextElement,{translateX:`-${this.step +this.stepUnit}`});
        Animations.prototype.horizontalMixing(this.element,{translateX:this.step +this.stepUnit});

        let ApplicationSettingElement = new ApplicationSettings(this.element);
        let ApplicationSettingNextElement = new ApplicationSettings(this.nextElement);

        ApplicationSettingElement.addAttribute([{title:'data-active',value:'disabled'}]);
        ApplicationSettingNextElement.addAttribute([{title:'data-active',value:'active'}]);

        new SwitchButtonBackStep();
    }
}
