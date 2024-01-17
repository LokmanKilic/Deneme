import { LightningElement,  wire } from 'lwc';
import { getRecords } from 'lightning/uiRecordApi';
import ACCNAME_FIELDS from '@salesforce/schema/Account.Name';
import ACCINDUSTRY_FIELDS from '@salesforce/schema/Account.Industry';
import CONNAME_FIELDS from '@salesforce/schema/Contact.Name';
import CONTITLE_FIELDS from '@salesforce/schema/Contact.Title';

export default class GetRecordsMultpleObjects extends LightningElement {
    accounts;
    contacts;
    /* @track accounts;
    @track contacts; */
    @wire(getRecords,{
        records: [
            {
                recordIds:["0017R00002z88U9QAI","0017R00002z88U7QAI"],
                fields:[ACCINDUSTRY_FIELDS,ACCNAME_FIELDS]
            },
            {
                recordIds:["0037R00003Mq6cNQAR","0037R00003Mq6cIQAR"],
                fields:[CONNAME_FIELDS,CONTITLE_FIELDS]
            }
        ]
    })
    recordsHandler({data,error}){

        if (data) {

            console.log("Birden Çok Object Datası---->:", data);

            this.accounts=data.results[0];
            this.contacts=data.results[2];
            
        }else if(error){
            console.log("Errors..:",data);


        }

    }
}