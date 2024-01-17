import AREVENUE_FIELD  from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD  from '@salesforce/schema/Account.Industry';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE__FIELD  from '@salesforce/schema/Account.Type';
import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';


 const FIELDS =[AREVENUE_FIELD,INDUSTRY_FIELD,NAME_FIELD,TYPE__FIELD]

export default class GetRecordFromDataBase extends LightningElement {
    accountInf;
    recordId="0017R00002z88U8QAI";
    @wire(getRecord,{recordId:'$recordId', fields:FIELDS})
    accountInfo({data,error}){

        if (data) {

           this.accountInf=data;

           console.log("Son Data get Record :", this.accountInf);
            
        } else if(error){
            console.log(error);        }


    }






}