import getInfo from '@salesforce/apex/getInfosWithApexImperativeMethod.getInfoApexImperative';
import { LightningElement } from 'lwc';

const COLUMNS=[
    {label:"Opp Name", fieldName:"Name", type:"text"},
    {label:"Stage Name", fieldName:"StageName", type:"text"},
    {label:"Amount", fieldName:"Amount", type:"currency"}
]

export default class GetInfosWithApexImperativeMethod extends LightningElement {
    opps;
    errors;
    columns=COLUMNS;

    getInfoApexImperatives(){
        getInfo()
        .then(result =>{

            this.opps=result;
            this.errors=undefined;
            console.log("IMPERATİVE INFOS",result);

        })
        .catch(error => {

            this.error=error;
        })


     }
    
}