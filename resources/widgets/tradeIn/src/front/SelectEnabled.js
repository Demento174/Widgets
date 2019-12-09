import SelectChangeAbstract from "./SelectChangeAbstract";
import { ElementsConfig } from '../../config';

export default class SelectEnabled extends SelectChangeAbstract{
    constructor(select=null,value=null,optionsElements=null)
    {
        super(!select?`.${ElementsConfig.classes.modalWindow.selectWrapper} select:disabled`:select,value);

        this.activeSelect();

        this.optionsElements = optionsElements;

        this.setStyles(ElementsConfig.styles.selects.enabled);

        if(this.optionsElements)
        {
            this.insertOptions();
        }

        return this.select;

    }

    insertOptions()
    {
        this.cleanSelect();
        this.optionsElements.forEach((item)=>{
            let option = document.createElement('option');
            option.value = item.id;
            option.innerText = item.value;
            this.select.append(option);
        });
    }

    activeSelect()
    {
        this.select.disabled= false;
    }



}
