import CreateElements from "../../../../js/modules/CreateElement";
import { ElementsConfig,Elements } from '../../config';
import DrugAndDrop from "../../../../js/modules/DrugAndDrop";
const elements = Elements.sideWindowFront;
const classes = ElementsConfig.classes.sideWindowFront;

export default class SideWindowFront{
    constructor(marks)
    {

        if(typeof marks !== 'object' || marks.length < 1)
        {

            throw 'Marks do not come';
        }


        this.marks = marks;

        this.sideWindow  = new CreateElements(elements);

        this.assemblySelect();

        this.drugAndDrop();

        return this.sideWindow;
    }


    assemblySelect()
    {

        this.marks.forEach((item)=>{
            let option  = document.createElement('option');
            option.value = item.id;
            option.innerText = item.mark;
            this.sideWindow.querySelector(`.${classes.select}`).append(option);
        });
    }

    drugAndDrop()
    {

       let drugAndDrop = new DrugAndDrop(this.sideWindow);
       drugAndDrop.upDown();
    }

}
