import { LightningElement,track} from 'lwc';

export default class TrackAndGetter extends LightningElement {

      
    @track nerelisin ={
        ulke:'Almanya',
        sehir:'Stuttgart',
        tevellud:'1977'
        
    }

        meyveler=['elma','armut','muz','tarık'];

        get meyve(){

         return this.meyveler[0];
        }
    

    handleChange(event){
         
         if (event.target.label ==='ulke') {
            this.nerelisin.ulke=event.target.value;
         } 
         if (event.target.label ==='sehir') {
            this.nerelisin.sehir=event.target.value;
         }else {            
            this.nerelisin.tevellud = event.target.value;
             
         }
       
    }
}