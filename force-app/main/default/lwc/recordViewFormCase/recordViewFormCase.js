import { LightningElement, api } from 'lwc';


import CASE_OBJECT from '@salesforce/schema/Case';
import ACCOUNT_FIELD from '@salesforce/schema/Case.AccountId';
import CASEnUMBER_FIELD  from '@salesforce/schema/Case.CaseNumber';
import ORIGIN_FIELD  from '@salesforce/schema/Case.Origin';
import PRIORITY_FIELD  from '@salesforce/schema/Case.Priority';
import STATUS_FIELD  from '@salesforce/schema/Case.Status';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';


export default class RecordViewFormCase extends LightningElement {

    @api recordId;
    @api objectApiName;
    
    fields={
        caseNumber:CASEnUMBER_FIELD,
        account:ACCOUNT_FIELD,
        origin:ORIGIN_FIELD,
        priority:PRIORITY_FIELD,
        status:STATUS_FIELD,
        subject:SUBJECT_FIELD


    }



}