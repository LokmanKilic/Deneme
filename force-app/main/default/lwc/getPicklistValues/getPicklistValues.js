import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';


export default class GetPicklistValues extends LightningElement {
    accRecId;
    industryOptions=[];
    showIndustry;   

    @wire(getObjectInfo,{objectApiName: ACCOUNT_OBJECT})
    objectInfoHandler({data,error}){
        console.log('Datalarım: ', data);

        if (data) {
            this.accRecId=data.defaultRecordTypeId;
        } 
        if (error) {
            console.log(error);
        }

    }
    

    @wire(getPicklistValues, {fieldApiName: INDUSTRY_FIELD, recordTypeId: '$accRecId'})    
    GetPicklistInfoHandler({data,error}){
         
        // I. Yol
       
        if (data) {           
            this.industryOptions= data.values;
                  
            
        }
        if (error) {
            console.log(error);
        }

    }
       
        /*  II. Yol
       
       if (data) {           
            this.industryOptions= this.picklistGenarator(data);            
        }
        if (error) {
            console.log(error);
        }
    }
    picklistGenarator(data){        
        return data.values.map(item=> ({            
            label: item.label,
            value: item.value

        }))

    } */

    changeHandler(event){
        if (event) {

          this.showIndustry=event.target.value;
            
        }

    }

    

}