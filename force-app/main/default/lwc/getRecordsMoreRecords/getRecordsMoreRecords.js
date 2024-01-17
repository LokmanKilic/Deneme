import { LightningElement, track, wire } from 'lwc';
import { getRecords } from 'lightning/uiRecordApi';
import NAME_FIELDS from '@salesforce/schema/Account.Name';
import TYPE_FIELDS from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELDS from '@salesforce/schema/Account.Industry';
import PHONE_FIELDS from '@salesforce/schema/Account.Phone';


export default class GetRecordsMoreRecords extends LightningElement {
    
    @track accounts;

    @wire(getRecords,{
        records: [ {
            recordIds:["0017R00002z88UAQAY", "0017R00002z88UCQAY"],
            fields:[NAME_FIELDS,INDUSTRY_FIELDS,TYPE_FIELDS],
            optionalFields:[PHONE_FIELDS]
        }
        ]
    })
    recordsHandler({data,error}){
        if (data) {
            console.log("Birden Çok Data---", data);

            this.accounts=data.results;
            
        } else if(error){
            console.log("Error--> ", error);
        
      
        


    }
    }
}
