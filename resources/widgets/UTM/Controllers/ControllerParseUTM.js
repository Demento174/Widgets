import { UTMSearch } from "../config";

export default class ControllerParseUTM {
    constructor(array)
    {
        if(!array || array.length<1)
        {
            return false;
        }

        this.utm = array;
    }

    set utm (array)
    {
        let utm = false;

        for (let item in array) {

            let key =  UTMSearch.find((element)=>{if(element===item){return item;}return false});
            if(key)
            {
                utm = key;
            }
        }

        this._utm = utm;
    }

    get utm ()
    {
        return this._utm;
    }

}
