import { LightningElement } from 'lwc';
import getAccWithParameter from '@salesforce/apex/getInfosWithApexImpMethodWithParameter.getContacts';

export default class GetInfosApexImperativeMethodWithParameter extends LightningElement {
    
    word;
    contactlar;
    error;
  
    getAccInfosWithParameter(event){
        this.word=event.target.value;
       
        getAccWithParameter({searchedWord:this.word})
        .then(result => {
            this.contactlar = result;
            this.error = undefined;
            console.log("CONTACTS: ", result);

        })
        .catch(error =>{

            this.error = error;
            this.contactlar = undefined;
        })

    }
}