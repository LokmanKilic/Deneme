
import { LightningElement, wire } from 'lwc';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import {  getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';

export default class PicklistOpportunitiesbyRecortTypeId extends LightningElement {   
   
    industryOptions=[];
    industrySource;

    @wire(getPicklistValuesByRecordType,{objectApiName:OPPORTUNITY_OBJECT, recordTypeId:"0127R000000Tmgv"})
    getInfoPicklist({data,error}){

        if (data) {
        console.log("opprtunty verileri : ", data);
        this.industryOptions= this.buildTreeMode(data.picklistFieldValues.StageName);
       

           
        }
        if (error) {
            console.log("Error-2 ", error);
        }

    }
    buildTreeMode(info) {
        return info.values.map(item => ({
            label: item.label,
            value: item.value
        }));
    }
    handleChange(event){
        this.industrySource = event.target.value;
        } 



    }
     

