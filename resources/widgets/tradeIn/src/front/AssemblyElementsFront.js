import SideWindowFront from "./SideWindowFront";
import ModalWindowFront from "./ModalWindowFront";
export default class AssemblyElementsFront {
    constructor(marks)
    {
        this.sideWindow = new SideWindowFront(marks);

        this.modalWindow = new ModalWindowFront(marks);

        this.assembly();
    }


    assembly()
    {
        document.querySelector('body').append(this.sideWindow);
        document.querySelector('body').append(this.modalWindow);
    }

}
