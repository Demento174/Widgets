import { ElementsConfig } from "../../config";
import Animations from "../../../../js/modules/Animations";

export default class SwitchButtonBackStep {
    constructor()
    {
        this.button = `.${ElementsConfig.classes.modalWindow.backStep}`;
        this.activeElement = document.querySelector(`.${ElementsConfig.classes.modalWindow.wrapper}`);
        this.value = this.constructor.options();
        this.handler();
    }

    set activeElement (wrapper)
    {
        this._activeElement = wrapper.querySelector(`[data-active="active"]`);
    }

    get activeElement ()
    {
        return this._activeElement;
    }

    set value (options)
    {
        options.forEach((item) => {

            if(this.activeElement.classList.contains(item.class))
            {
                this._value = item.value;
            }
        });
    }

    get value ()
    {
        return this._value;
    }

    set button (selector)
    {
        this._button = document.querySelector(selector);
    }

    get button ()
    {
        return this._button;
    }


    static options()
    {
        return[
            {
                class:ElementsConfig.classes.modalWindow.step_1,
                value:'disabled'
            },
            {
                class:ElementsConfig.classes.modalWindow.step_2,
                value:'enabled'
            },
            {
                class:ElementsConfig.classes.modalWindow.step_3,
                value:'enabled'
            }
        ]
    }

    handler()
    {
        let opacity  = '0';
        if(this.value === 'enabled')
        {
            opacity = '1';
        }

        Animations.prototype.switchOpacity(this.button,{opacity:opacity});
    }
}
