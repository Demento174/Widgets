import AddHandlerForEvent from "./AddHandlerForEvent";
import EventRollUpClose from "../../widgets/tradeIn/src/Events/EventRollUpClose";
import Animations from "./Animations";
export default class ApplicationSettings {

    constructor(element)
    {
        this.element = element;
    }

    set element(element)
    {

        this._element = typeof element ==='string'?document.querySelector(element):element;
    }

    get element()
    {
        return this._element;
    }

    addStyle(styles)
    {

        for (let style in styles) {
            this.element.style[style] = styles[style];
        }
    }

    addSettings(settings)
    {
        for (let setting in settings) {
            this.element[setting] = settings[setting];
        }
    }

    addEvents(events,target)
    {
        events.forEach((item)=>{
            new AddHandlerForEvent(target,item.trigger,(event)=>{
                item.options.event = event;
                item.handler(item.options)
            });
        });
    }

    addAnimate(animates)
    {
        animates.forEach((item)=>{
            const delay = !item.delay ? 0 :item.delay;
            Animations.prototype[item.title](this.element,item.options,delay);
        });
    }

    addAttribute(attributes)
    {

        attributes.forEach((item)=>{

            this.element.setAttribute(item.title,item.value);
        });
    }

    handler(item)
    {

        if (item.class)
        {

            this.element.classList.add(item.class);
        }

        if(item.id)
        {
            this.element.setAttribute('id',item.id)
        }

        if(item.styles)
        {
            this.addStyle(item.styles);
        }

        if(item.settings)
        {
            this.addSettings(item.settings);
        }

        if(item.attributes)
        {

            this.addAttribute(item.attributes);
        }

        if(item.events)
        {
            this.addEvents(item.events,this.element);
        }

        if(item.animates)
        {
            this.addAnimate(item.animates);
        }

        return this.element;
    }
}
