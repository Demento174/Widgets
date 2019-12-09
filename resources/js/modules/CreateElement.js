import ApplicationSettings from "./ApplicationSettings";
import AddHandlerForEvent from "./AddHandlerForEvent";

export default class CreateElements
{
    constructor(object,parent = null)
    {
        if(object.length === 0)
        {
            throw "Create Elements take Empty object";
        }

        this.items = object;
        this.parent = parent;
        this.handler();

        if(!this.parent)
        {
            return this.element;
        }

    }

    set element (element)
    {
        this._element = typeof element === 'string'?document.createElement(element):element;
    }

    get element ()
    {
        return this._element;
    }



    handler()
    {

        this.items.forEach((item)=>{

            this.element= item.tag;

            let ApplicationSettingController = new ApplicationSettings(this.element);

           this.element = ApplicationSettingController.handler(item);

            if(item.internalElements)
            {
                new CreateElements(item.internalElements,this.element);
            }

            if(this.parent)
            {
                this.parent.append(this.element);
            }

        });
    }
}
