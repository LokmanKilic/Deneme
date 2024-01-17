import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import CREATDATE_FIELD from '@salesforce/schema/Account.CreatedDate';
import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

const FIELDS=[ANNUALREVENUE_FIELD,INDUSTRY_FIELD,NAME_FIELD,PHONE_FIELD,CREATDATE_FIELD];
export default class GetRecordWithTheirValues extends LightningElement {

    Name;
    NamewithDisplayvalue ;
    Industry;
    IndustrywithDisplayvalue;
    Phone;
    PhonewithDisplayvalue;
    AnnualRevenue;
    AnnualRevenuewithDisplayvalue;
    CreatedDate;
    CreatedDatewithDisplayvalue;

    @wire(getRecord,{recordId:"0017R00002z88U8QAI" , fields: FIELDS})
    getInfoValues({data,error}){
        if (data) {
            console.log("Value Dataları :", data);
        this.Name=getFieldValue(data,NAME_FIELD);
        this.NamewithDisplayvalue=getFieldDisplayValue(data,NAME_FIELD);
        this.Industry=getFieldValue(data,INDUSTRY_FIELD);
        this.IndustrywithDisplayvalue=getFieldDisplayValue(data,INDUSTRY_FIELD);
        this.Phone=getFieldValue(data,PHONE_FIELD);
        this.PhonewithDisplayvalue=getFieldDisplayValue(data,PHONE_FIELD);
        this.AnnualRevenue=getFieldValue(data,ANNUALREVENUE_FIELD);
        this.AnnualRevenuewithDisplayvalue=getFieldDisplayValue(data,ANNUALREVENUE_FIELD);
        this.CreatedDate=getFieldValue(data,CREATDATE_FIELD);
        this.CreatedDatewithDisplayvalue=getFieldDisplayValue(data,CREATDATE_FIELD);


        } else if(error){

            console.log(this.ariaErrorMessage);
        }
        
      
     } 

     }

