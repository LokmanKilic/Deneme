import { LightningElement } from 'lwc';

export default class ModelComponent extends LightningElement {

    kapatHandler(){

        const contact ={
            isim:"Burak",
            soyisim:"Can"
        }
        const kapatOlayı = new CustomEvent('kapat',{ bubbles:true, detail:contact});
        this.dispatchEvent(kapatOlayı);
    }
}