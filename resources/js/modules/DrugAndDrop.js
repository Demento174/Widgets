export default class DrugAndDrop {
    constructor(element)
    {
        if(!element)
        {
            return;
        }
        this.element = element;
    }

    upDown()
    {

        let counter;
        let counterValue =0;
        this.element.onmousedown = (e)=> { // 1. отследить нажатие
            counter = window.setTimeout(() => {
                counterValue++;
                },300);

            let moveAt = (e)=>{
                if(e.pageY >= (window.innerHeight - (this.element.clientHeight /100 ) ) || e.pageY <= (this.element.clientHeight /100 )  )
                {

                    return  false;
                }
                this.element.style.top = e.pageY - this.element.offsetHeight / 2 + 'px';

                return false;
            };

            // moveAt(e);

            document.onmousemove = function(e) {

                if(counterValue>=1)
                {
                    moveAt(e);
                }
            };
            document.onmouseup = ()=> {

                document.onmousemove = null;

                clearInterval(counter);
                counterValue = 0;
                this.element.onmouseup = null;
                return false;
            }
        };




    }
}
