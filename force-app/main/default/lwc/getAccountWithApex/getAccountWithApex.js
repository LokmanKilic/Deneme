import getAccountInfoWithApex from '@salesforce/apex/getAccountInfosWithApex.getAccountInfoWithApex';
import { LightningElement, wire } from 'lwc';

const COLUMNS=[
   
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' },
    { label: 'Annual Revenue', fieldName:'AnnualRevenue' , type : 'currency' },
    { label: 'Phone', fieldName: 'Phone', type: 'Phone' },
    { label: 'Website', fieldName: 'Website', type: 'url' } 
]

export default class GetAccountWithApex extends LightningElement {

    columns=COLUMNS;

    @wire(getAccountInfoWithApex)
    accountsInfo;
    }