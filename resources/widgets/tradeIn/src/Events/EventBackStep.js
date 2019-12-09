import {ElementsConfig} from "../../config";
import Animations from "../../../../js/modules/Animations";
import ApplicationSettings from "../../../../js/modules/ApplicationSettings";
import SwitchButtonBackStep from "./SwitchButtonBackStep";

export default class EventBackStep {
    constructor(options)
    {
        if(!options.element)
        {
            return;
        }

        this.element = options.element;

        this.stepUnit = !options.stepUnit?ElementsConfig.settings.stepUnit:options.stepUnit;
        this.prevElement = this.element;

        this.step = !options.step?ElementsConfig.settings.step:options.step;

        if(this.prevElement)
        {
            this.handler();
        }
    }

    set element (selector)
    {
        this._element = document.querySelector(selector);
    }

    get element ()
    {
        return this._element;
    }


    set prevElement (element)
    {
        this._prevElement = element.previousElementSibling;
    }

    get prevElement ()
    {
        return this._prevElement;
    }

    set step (value)
    {
        if(this.prevElement.style.right === '0px')
        {
            this._step = 0;
        }else
            {
                this._step = value;
            }
    }

    get step ()
    {
        return this._step;
    }


    handler()
    {

        Animations.prototype.horizontalMixing(this.element,{translateX:this.step +this.stepUnit});
        Animations.prototype.horizontalMixing(this.prevElement,{translateX:`-${this.step +this.stepUnit}`});
        // Animations.prototype.horizontalMixing(this.prevElement,{translateX:`0`});

        let ApplicationSettingElement = new ApplicationSettings(this.element);
        let ApplicationSettingPrevElement = new ApplicationSettings(this.prevElement);

        ApplicationSettingElement.addAttribute([{title:'data-active',value:'disabled'}]);
        ApplicationSettingPrevElement.addAttribute([{title:'data-active',value:'active'}]);

        new SwitchButtonBackStep();
    }
}
