import { LightningElement } from 'lwc';

export default class C2pCallingParentEventBubblingChild extends LightningElement {

    handleClick(event){

        console.log("Child Komponent içinden Custom  Event Gönderilecek");
        this.dispatchEvent(new CustomEvent('goster',{bubbles:true, composed:true}));
        console.log("Child Komponent içinden Custom  Event süreci tamamlandı");


    }
}