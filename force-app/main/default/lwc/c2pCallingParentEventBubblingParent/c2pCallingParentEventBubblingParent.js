import { LightningElement } from 'lwc';

export default class C2pCallingParentEventBubblingParent extends LightningElement {
    gosterYardimcisi(event){

        //her türlü işlem yapılabilir

        console.log("Burası Parent Component !!!");
        console.log(event.target.nodeName);
        console.log(event.currentTarget.nodeName);

    }
    gosterYardimcisi2(event){

        //her türlü işlem yapılabilir

        console.log("Burası Parent Component içindeki Div !!!");
        console.log(event.target.nodeName);
        console.log(event.currentTarget.nodeName);

    }
}