import XhrClass from "../../../../js/modules/XhrClass";
import { actions,AjaxUri } from  '../../config';


export default class GetItemsClass{
   constructor(options)
    {

        if(!options.table)
        {
            return;
        }

        this.action = options.table;
        this.data = !options.data?null:options.data;

       return  this.handler.apply(this);

    }

    set action(table)
    {

        this._action =  actions[table];
    }

    get action()
    {
        return  this._action;
    }

    async handler()
    {

        const data =
            {
                'action':this.action,
                'data':this.data,
                'key':window.tradeInKey
            };

        const response =new Promise((resolve, reject) => {
            const reader = new XhrClass({
                body:data,
                uri:AjaxUri,
                method:'post',
                callback:this.callback.bind(this),
                sync:false,
            });

            reader.onreadystatechange = (e) => {
                resolve(e);
            };
        });

        return this.response;

    }

    callback(err, resp, body)
    {

        if(err)
        {
            throw new Error(err);
        }
        this.response = body;

    }
}
