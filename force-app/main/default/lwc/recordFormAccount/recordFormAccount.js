import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNTNUMBER_FIELD  from '@salesforce/schema/Account.AccountNumber';
import ANNAULREVENUE_FIELD  from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD  from '@salesforce/schema/Account.Industry';
import NAME_FIELD  from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";



export default class RecordFormAccount extends LightningElement {
    @api objectApiName;
    //objectName= ACCOUNT_OBJECT;
    @api recordId;
    message = "Sample Message";

    fields=[ NAME_FIELD, INDUSTRY_FIELD,TYPE_FIELD,ACCOUNTNUMBER_FIELD,ANNAULREVENUE_FIELD];

    showNotificationSuccess() {
        const evt = new ShowToastEvent({
          title:"Success !",
          message:"Record was created",
          variant: "success"
          
        });
        this.dispatchEvent(evt);
      }
      showNotificationError() {
        const evt = new ShowToastEvent({
          title:"Error !",
          message:"Record wasnt created",
          variant: "error"
          
        });
        this.dispatchEvent(evt);
      }
}