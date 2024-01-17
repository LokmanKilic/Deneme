
import { LightningElement } from 'lwc';

export default class C2pCallingParentUsingEventWithData extends LightningElement {
    modalGoster = false;
    message;

    acmaHandler(event){

        this.modalGoster=true;
    }
    kapatmaHandler(event){
        this.modalGoster=false;
        this.message=event.detail;
    }
}