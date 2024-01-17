import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    modalGoster = false;

    acmaHandler(event){

        this.modalGoster=true;
    }
    kapatmaHandler(event){
        this.modalGoster=false;
    }
}

/* import { LightningElement } from 'lwc';

export default class ModelComponent extends LightningElement {

    kapatHandler(){
        const kapatOlayı = new CustomEvent('kapat');
        this.dispatchEvent(kapatOlayı);
    }
} */