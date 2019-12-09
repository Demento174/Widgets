import CreateElements from "../../../../js/modules/CreateElement";
import { ElementsConfig , Elements, events } from '../../config';
import GetItemsClass from "../connect/GetItemsClass";
import ApplicationSettings from "../../../../js/modules/ApplicationSettings";
const elements = Elements.modalWindow;
const classes = ElementsConfig.classes.modalWindow;


export default class ModalWindowFront{
    constructor(marks)
    {

        if(typeof marks !== 'object' || marks.length < 1)
        {

            throw 'Marks do not come';
        }


        this.marks = marks;

        this.modalWindow  = new CreateElements(elements);
        this.assemblyParserCars();
        this.assemblySelect();

        return this.modalWindow;
    }


    assemblySelect()
    {

        this.marks.forEach((item)=>{
            let option  = document.createElement('option');
            option.value = item.id;
            option.innerText = item.mark;
            this.modalWindow.querySelector(`.${classes.select.mark}`).append(option);
        });
    }

   async assemblyParserCars()
    {
        const cars = await  new GetItemsClass({table:'cars'});

        let element = this.modalWindow.querySelector(`.${ElementsConfig.classes.modalWindow.carCard}`).cloneNode(true);

        this.modalWindow.querySelector(`.${ElementsConfig.classes.modalWindow.carCard}`).remove();

        cars.forEach((item)=>{

            let cloneElement = element.cloneNode(true);

            cloneElement.querySelector('img').src = item.img;
            cloneElement.querySelector(`.${ElementsConfig.classes.modalWindow.carCardTitle}`).innerText = `${item.mark} ${item.model}`;
            cloneElement.querySelector(`.${ElementsConfig.classes.modalWindow.carCardEquipment}`).innerText = `${item.equipment}`;
            cloneElement.querySelectorAll(`.${ElementsConfig.classes.modalWindow.carCardPriceOld} span`)[0].innerText = `${item.price}`;

            let ApplicationSettingsCloneElement =  new ApplicationSettings(cloneElement);
            ApplicationSettingsCloneElement.addAttribute([{title:ElementsConfig.attributes.cardPrice,value:item.price}]);
            ApplicationSettingsCloneElement.addEvents([events.carSelection],cloneElement);
            this.modalWindow.querySelector(`.${ElementsConfig.classes.modalWindow.step_2}`).append(cloneElement);
        });
    }

}
