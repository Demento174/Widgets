import xhr from 'xhr';
export default class xhrClass
{
    constructor(options)
    {
        this.xhr = xhr;
        this.sync = !options.sync?true:options.sync;
        this.uri= !options.uri?'/admin-ajax':options.uri;
        this.body = options.body;
        this.method = options.method;
        this.callback = !options.callback?null:options.callback;
        if(options.headers)
        {
            this.headers = options.headers;
        }
        this.response = false;

        switch (typeof options.body)
        {
            case "string":
                this.pushJSON();
                break;
            case "object":
                this.pushObject();
                break;
            case "function":
                options.body();
                break;
            case "undefined":
            default:
                return this.response;
        }
        return this.response;
    }

    set headers(headers)
    {
        if(!this._headers)
        {
            this._headers = {};
        }
        for (let item in headers)
        {

            this._headers[item] = headers[item];
        }
    }

    get headers()
    {
        return this._headers;
    }

    pushObject()
    {
        // this.headers = {'Content-Type':'application/post'};
        this.headers = {'Content-Type':false};
        this.push();
    }

    pushJSON()
    {
        this.headers = {
            'Content-Type':'multipart/form-data'
        };
        this.push();
    }

    push()
    {

        this.xhr({
            method: this.method,
            body: this.body,
            uri: this.uri,
            headers: this.headers,
            processData: false,
            contentType: false,
            sync:this.sync,
            useXDR:true,
            json:true,
        },this.callback.bind(this))
    }
}
