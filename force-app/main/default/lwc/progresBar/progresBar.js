import { LightningElement, api } from 'lwc';

export default class ProgresBar extends LightningElement {
    @api progressValue;

    @api resetProgress(){        
        this.progressValue=0;

    }
}