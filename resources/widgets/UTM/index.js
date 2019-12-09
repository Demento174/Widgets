import FrontAssemblyElements from "./Front/FrontAssemblyElements";
import EventPopUpBanner from "./Events/EventPopUpBanner";
import ParserGet from "../../js/modules/ParserGet";
import ControllerParseUTM from "./Controllers/ControllerParseUTM";

(async()=> {

    new FrontAssemblyElements();

    let ParserGetController = new ParserGet();
    let ControllerParserUtm = new ControllerParseUTM(ParserGetController.urlArray);

    if(ControllerParserUtm.utm)
    {
        setTimeout(()=>{
            new EventPopUpBanner();
        },1000);
    }

})();
