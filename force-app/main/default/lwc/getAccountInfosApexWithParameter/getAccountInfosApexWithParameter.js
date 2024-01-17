import { LightningElement, wire } from 'lwc';

import getAccInfosApexWithParameter from '@salesforce/apex/getAccountInfosWithApex.getAccInfosApexWithParameter';

const COLUMNS=[
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Acc Type', fieldName: 'Type', type: 'text'},
    { label: 'Industry', fieldName: 'Industry', type: 'text'},    
    { label: 'Phone', fieldName: 'Phone', type: 'Phone'}
    
]

export default class GetAccInfosApexWithParameter extends LightningElement {

    selectedType="Customer - Direct";
    columns=COLUMNS;
    @wire(getAccInfosApexWithParameter, {paramater:"$selectedType"})
    accounts;
}