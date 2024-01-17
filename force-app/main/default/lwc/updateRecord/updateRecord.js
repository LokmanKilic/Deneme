import { LightningElement, wire } from 'lwc';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import { getRecord, updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const FIELDS = [SUBJECT_FIELD, STATUS_FIELD, PRIORITY_FIELD, DESCRIPTION_FIELD];

export default class UpdateRecord extends LightningElement {
    recordId = '5007R00003bOVO8QAO';
    fields = {};

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    caseRec;

    changeHandler(event) {
        const { name, value } = event.target;
        this.fields[name] = value;
    }

    updateCase() {
        this.fields['Id'] = this.recordId;
        const recordInput = {
            fields: this.fields
        };
        updateRecord(recordInput)
            .then(result => {
                console.log(result);
                // Başarılı bir güncelleme durumunda bir toast mesajı gösterin
                this.mesajGoster('Başarılı', 'Kayıt güncellendi', 'success');
            })
            .catch(error => {
                console.error(error);
                // Hata durumunda bir hata toast mesajı gösterin
                this.mesajGoster('Hata', 'Kayıt güncelleme başarısız oldu', 'error');
            });
    }

    mesajGoster(title, message, variant) {
        const toastMessage = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(toastMessage);
    }
}