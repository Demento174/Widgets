import ApplicationSettings from "../../../../js/modules/ApplicationSettings";
import { prevAll,nextAll } from "../../../../js/common";

export default class SelectChangeAbstract {

    constructor(select,value=null)
    {
        this.select = select;
        this.nextSelect = this.select;
        this.prevSelect = this.select;
        this.allNextSelect = this.select;
        this.allPrevSelect = this.select;
        if(value)
        {
            this.select.value = value;
        }
    }

    set select (selectorOrSelect)
    {
        this._select = typeof selectorOrSelect==='string'?document.querySelector(selectorOrSelect):selectorOrSelect;
    }

    get select ()
    {
        return this._select;
    }

    set nextSelect (element)
    {
        this._nextSelect = (element.nextSibling && element.nextSibling.tagName === 'SELECT') ? element.nextSibling : null;
    }

    get nextSelect ()
    {
        return this._nextSelect;
    }

    set prevSelect (element)
    {
        this._prevSelect =(element.previousSibling && element.previousSibling.tagName === 'SELECT') ? element.previousSibling : null;
    }

    get prevSelect ()
    {
        return this._prevSelect;
    }

    set allPrevSelect (select)
    {
        this._allPrevSelect = prevAll(select);
    }

    get allPrevSelect ()
    {
        return this._allPrevSelect;
    }

    set allNextSelect (select)
    {
        let elements = nextAll(select);
        elements.forEach((item,key)=>{
            if(item.tagName !== 'SELECT')
            {
                elements[key].remove();
            }
        });
        this._allNextSelect = elements;
    }

    get allNextSelect ()
    {
        return this._allNextSelect;
    }

    setStyles(styles)
    {
        let ApplicationSettingsController = new ApplicationSettings(this.select);

        ApplicationSettingsController.addStyle(styles);
    }

    cleanSelect()
    {
        const defaultOptionContent = this.select.options[0].innerText;
        const defaultOption = this.select.options[0].cloneNode();
        defaultOption.innerText = defaultOptionContent;

        this.select.innerHTML='';
        this.select.prepend(defaultOption);
    }
}

