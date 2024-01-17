import { LightningElement } from 'lwc';

export default class LifeCyclesParent extends LightningElement {
    constructor(){
        super();
        console.log("Parent component üzerindeki CONSTRUCTOR hook'u çalıştı");
    }

    connectedCallback(){
      console.log("Parent component üzerindeki CONNECTEDCALLBACK hook'u çalıştı");
      
    }

    renderedCallback(){

        // this.girisDegeri="Yeni Değer";

        console.log("Parent component üzerindeki RENDEREDCALLBACK hook'u çalıştı");
    }
    disconnectedCallback(){
        console.log("Parent component üzerindeki DISCONNECTEDCALLBACK hook'u çalıştı");
    }

    girisDegeri;
    gosterChild=true;
    changeHandler(event){
      this.girisDegeri=event.target.value;
    }
    childHandler(event){
        this.gosterChild=false;
    }

    errorCallback(error,stack){
         console.log("Parent component üzerindeki ERRORCALLBACK hook'u çalıştı");
        console.log(error.message);
       console.log(stack); 


    }


}