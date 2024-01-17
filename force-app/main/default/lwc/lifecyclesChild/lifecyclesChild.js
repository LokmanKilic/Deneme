import { LightningElement } from 'lwc';

export default class LifecyclesChild extends LightningElement {

    constructor(){
        super();
        console.log("Child component üzerindeki CONSTRUCTOR hook'u çalıştı");
    }

    connectedCallback(){
      console.log("Child component üzerindeki CONNECTEDCALLBACK hook'u çalıştı");
      throw new Error("Child componente bağlanırken bir hata oluştı");
    }

    renderedCallback(){

        console.log("Child component üzerindeki RENDEREDCALLBACK hook'u çalıştı");
    }
    disconnectedCallback(){
        console.log("Child component üzerindeki DISCONNECTEDCALLBACK hook'u çalıştı");
    }
}