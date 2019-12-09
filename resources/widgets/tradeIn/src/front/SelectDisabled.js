import SelectChangeAbstract from "./SelectChangeAbstract";
import { ElementsConfig } from '../../config';

export default class SelectDisabled extends SelectChangeAbstract{
    constructor(select=null,value=null,optionsElements=null)
    {
        super(!select?`.${ElementsConfig.classes.modalWindow.selectWrapper} select:disabled`:select,value);

        this.disabledSelect();

        this.cleanSelect();

        this.setStyles(ElementsConfig.styles.selects.disabled);

        return this.select;

    }

    cleanSelect() {
        super.cleanSelect();
    }

    disabledSelect()
    {
        this.select.disabled= true;
    }
}
