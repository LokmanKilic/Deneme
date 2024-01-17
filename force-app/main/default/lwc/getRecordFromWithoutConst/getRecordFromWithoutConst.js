
import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';



export default class GetRecordFromWithoutConst extends LightningElement {
    
    recordId='5007R00003bOVOMQA4';
    priority;
    email;
    subject;
    status;
    caseNumber;

    /* layoutTypes: ['Compact'] seçildiğinde ancak compact layout'ta bulunan fieldler gelir.istenen alan yoksa hata verir */
   
    @wire(getRecord,{recordId: '$recordId',layoutTypes: ['Full'], modes: ['View']})
    caseRecordHandler({data, error}){
      if (error) {

        console.log("Hatalar :", error);
        
    }else if (data) {
        console.log("case data----->  ", data);
        this.subject=data.fields.Subject.value; 
        this.email=data.fields.ContactEmail.value; 
        this.priority=data.fields.Priority.value;
        this.status=data.fields.Status.value; 
        this.caseNumber=data.fields.CaseNumber.value;    
 
 
      }
        
    }

}