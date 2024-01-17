import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DeleteRecords extends LightningElement {

recordId;

changeHandler(event){

    this.recordId=event.target.value;

}
  
kaydiSil(){     
    deleteRecord(this.recordId)
    .then(result => {
        console.log(result);
        this.messageGoster("Başarılı","Kayıt başarılı bir şekilde silinmiştir","success")
    })
    .catch(error =>{
        console.error(error);
        this.messageGoster("Başarısız",error.body.message,"error")
    })
}

messageGoster(title,message,variant){

    const mesaj=new ShowToastEvent({ title, message,variant});
   this.dispatchEvent(mesaj);        
}
}

