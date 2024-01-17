import { LightningElement } from 'lwc';

export default class TwoWayBinding extends LightningElement {

    firstName;
    lastName;

    changeHandler(event){
    
        if (event.target.label=== 'First Name') {
            this.firstName=event.target.value;
        } else{
        
        this.lastName=event.target.value;
        }

    }
}