
import { LightningElement, wire } from 'lwc';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import { getPicklistValues,getObjectInfo } from 'lightning/uiObjectInfoApi';
import LEADSOURCE_FIELDS from '@salesforce/schema/Opportunity.LeadSource';




export default class PicklistOpportunity extends LightningElement {

    recordTypeIdOpp;
    error;
    leadsouceOptions=[];
    showLeadSorce;
    opp=false;

    
    @wire(getObjectInfo,{objectApiName:OPPORTUNITY_OBJECT})  
    leadsouceOPP({data,error}){

        if (data) {

            this.recordTypeIdOpp=data.defaultRecordTypeId;            
        }
        if (error) {

            this.error=error;
            
        }

    }
    @wire(getPicklistValues, {fieldApiName:LEADSOURCE_FIELDS, recordTypeId:'$recordTypeIdOpp'})
    GetPicklistInfo({data,error}){
                
        if (data) {           
            this.leadsouceOptions= data.values;
                  
            
        }
        if (error) {
            console.log(error);
        }

    }

    handleChange(event){

       this.showLeadSorce=event.target.value;


    }
    handleClick(event){        
        this.opp=!this.opp;

    }

}

   



