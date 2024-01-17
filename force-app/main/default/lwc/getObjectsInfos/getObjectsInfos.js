import { getObjectInfos } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACC_OBJECT from '@salesforce/schema/Account';
import OPP_OBJECT from '@salesforce/schema/Opportunity';

export default class GetObjectsInfos extends LightningElement {
    
    oppInfos;
    accInfos;

    @wire(getObjectInfos,{objectApiNames:[ACC_OBJECT, OPP_OBJECT ]})
    getObjectInfos({data,error}){

        if (data) {

            console.log("VERİLER--: ", data);
            this.accInfos=data.results[0].result.defaultRecordTypeId; 
            this.oppInfos=data.results[1].result.defaultRecordTypeId;            

        }
        if(error) {
            console.log("HATALAR--: ", error);
        }

    }

}