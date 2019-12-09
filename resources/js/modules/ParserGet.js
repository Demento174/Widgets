export default class ParserGet {
    constructor(url)
    {
        this.url = url;

        if(this.url.indexOf('?') === -1)
        {
            return false;
        }
        this.urlArray = this.url;
    }

    set url (url)
    {
        if(!url || url == ''){
            this._url = decodeURI(document.location.search);
        }else
            {
                this._url = url;
            }
    }

    get url ()
    {
        return this._url;
    }

    set urlArray (value)
    {
        let data = {};
        value.split('&').forEach((item)=>{
            let arr =item.split('=');
            let title =arr[0].replace('?','');
            data[title] = arr[1];
        });

        this._urlArray = data;
    }

    get urlArray ()
    {
        return this._urlArray;
    }


}
