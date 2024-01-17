import { LightningElement } from 'lwc';

export default class QuerySelectors extends LightningElement {

    clickHandler(){
        /* querySeelctor sadece ilk karşılaştığı tagi getirir */
        const secim =this.template.querySelector('h1');
        console.log(secim.innerText);
        secim.style.border='3px solid black'

        /* Çoklu eleman Seçim */
                     /* 1.Yol */
        const cokluSecim=this.template.querySelectorAll("h1");
        cokluSecim.forEach(secimler =>{
            secimler.style.backgroundColor ='green'
        });
                     /* 2.Yol */
        const cokluClassSecim=this.template.querySelectorAll("h1");
        cokluClassSecim.forEach(secimler =>{
            secimler.setAttribute("class","slds-align_absolute-center");
        
    })


}
}