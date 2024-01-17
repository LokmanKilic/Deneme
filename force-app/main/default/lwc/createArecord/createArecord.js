import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { createRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';



export default class CreateArecord extends LightningElement {

    fields={};
   
    changeHandler(event){
          /* const name=event.target.name;
          const value=event.target.value; */
        const {name,value}=event.target;
        this.fields[name]= value;

    }
    contactOlustur(){

        const recordInput={
            apiName:"Contact", /* bunu da yazabilirdik --> apiName:CONTACT_OBJECT.objectApiName */
            fields:this.fields

        }

        createRecord(recordInput)
        .then(result => {
         
         // Başarılı bir şekilde kaydedildiğinde bildirim göster

         this.ShowToastSuccess();
        /*  2.yol
         ShowToastSuccess(); metodunu yazmadan direk böyle yazılabilir-->
             this.dispatchEvent(new ShowToastEvent({
                    title: "Success",
                    message: "Record has been created",
                    variant: "success"
        })); */

        /* 3.Yol
        this.ShowToastEvent("Successfull","Record has been created","success"  */

        
        this.contactCancel(); // Formu sıfırla
        })
        .catch(error =>{

            this.ShowToastError();
            /* 2. YOL
            this.ShowToastEvent("ERROR","Record has NOT been created","error" 
              */
             /*  3.YOL
          ShowToastError(); metodunu yazmadan direk böyle yazılabilir-->
                this.dispatchEvent(new ShowToastEvent({
                        title: "Error",
                        message: "Record has NOT been created",
                         variant: "error"
        })); */
        })        
    }

    ShowToastSuccess(){

        this.dispatchEvent(new ShowToastEvent({
            title: "Success",
            message: "Record has been created",
            variant: "success"
        }));
    }
    ShowToastError(){

        this.dispatchEvent(new ShowToastEvent({
            title: "Error",
            message: "Record has not been created",
            variant: "error"
        }));

         /*  ShowToast(title,message,variant){ 
            const messaj=new ShowToastEvent(title,message,variant);
            this.dispatchevent(mesaj);
           } */
    
}

contactCancel(){

    this.template.querySelector('form.createRecordForm').reset(); 

}



}