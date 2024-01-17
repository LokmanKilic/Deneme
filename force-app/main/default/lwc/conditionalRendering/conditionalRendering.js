import { LightningElement, api } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    
        caseDummy = true;
        veri2 = false;
        @api veri3;
    
        handleClick() {
            this.caseDummy = !this.caseDummy;
        }
    
        veriChange(event) {
            this.veri3 = event.target.value;
            this.veri2 = true;
        }
}