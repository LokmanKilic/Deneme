
import { LightningElement, wire } from 'lwc';
import ACC_OBJECT from '@salesforce/schema/Account';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';

export default class GetPicklistValuesbyRecordTypeId extends LightningElement {
    getPicklistValues =[];
    AccountSource;

    @wire(getPicklistValuesByRecordType, { objectApiName: ACC_OBJECT, recordTypeId: "0127R000000Tkwf" })
    getPicklistVal({data, error}) {
        if (data) {
            console.log("PIKLİSTLERİN DATASI  :", data);
           /*  this.getPicklistValues=data.picklistFieldValues.AccountSource;
            ; */
            this.getPicklistValues = this.buildTreeMode(data.picklistFieldValues.AccountSource);
        }
        if (error) {

            this.error=error;
            console.log("ERRORS---> ", error);
        }
    }
    
    buildTreeMode(info) {
        return info.values.map(item => ({
            label: item.label,
            value: item.value
        }));
    }     
    
    
    handleChange(event){
        this.AccountSource = event.target.value;
        } 



}


