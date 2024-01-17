import { LightningElement } from 'lwc';

export default class C2pCallingParentEventBubblingGrandParent extends LightningElement {

    gosterYardimcisi(event){

        //her türlü işlem yapılabilir

        console.log("Burası Grand Parent Component !!!");
        console.log(event.target.nodeName);
        console.log(event.currentTarget.nodeName);

    }
    gosterYardimcisi2(event){

        //her türlü işlem yapılabilir

        console.log("Burası Grand Parent Component içindeki Div !!!");
        console.log(event.target.nodeName);
        console.log(event.currentTarget.nodeName);

    }
}