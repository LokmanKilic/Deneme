import getKontacts from '@salesforce/apex/getInfosWithApexImpMethodWithParameter.getContacts';
import { LightningElement } from 'lwc';


const COLUMNS=[
    {label:"First Name", fieldName:"FirstName",type:"text"},
    {label:"Last Name", fieldName:"LastName",type:"text"},
    {label:"Title", fieldName:"Title",type:"text"},
    {label:"Email", fieldName:"Email",type:"email"}

]

export default class P2cActionAtParent extends LightningElement {
    searcResult;
    sunuc;
    kolonlar=COLUMNS;
   
    getContactsInfos(event){
        this.searcResult=event.target.value;
        getKontacts({searchedWord:this.searcResult})
        .then(result =>{
            console.log("SONUÇLAR---> ", result);
             this.sunuc=result;           
        })
        .catch(error=> {
            console.log(error);
        })



    }
}