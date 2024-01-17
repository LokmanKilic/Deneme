import acc from '@salesforce/schema/Account';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';


export default class GetObjectInfo extends LightningElement {
     getInfoProperty;
  
    @wire(getObjectInfo, {objectApiName: acc})     
    getObjectInfo({data, error}){
        if (data) {
            console.log('Sonuçlar----> ', data);
            this.getInfoProperty = data.defaultRecordTypeId;
                        
        } if (error) {
            console.log('errorlar' , error); 
        }
      
        
        
        
    }
}