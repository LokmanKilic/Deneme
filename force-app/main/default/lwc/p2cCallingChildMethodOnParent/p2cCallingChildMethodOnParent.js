import { LightningElement } from 'lwc';

export default class P2cCallingChildMethodOnParent extends LightningElement {

    progressValue2=10
    changeHandler(event){
        this.progressValue2=event.target.value;
        }

    resetHandler(){
        this.template.querySelector('c-progres-bar').resetProgress();
    }
}