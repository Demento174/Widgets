import GetItemsClass from "./src/connect/GetItemsClass";
import AssemblyElementsFront from "./src/front/AssemblyElementsFront";
import { getHashKey } from "../../js/common";
window.tradeInKey = getHashKey();
(async()=> {
    const marks = await  new GetItemsClass({table:'mark'});

    new AssemblyElementsFront(marks);

})();









