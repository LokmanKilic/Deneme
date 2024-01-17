import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {

  sehirName;
  countries=["Ankara","İstanbul","İzmir","Adana"];
  Tikla=false;



  contacts=[
    {
        id:1,
        firstName:"Lokman",
        lastName:"Kılıç"
    },
    {
        id:2,
        firstName:"Burak",
        lastName:"Kılıç"
    }
  ]

  handleClick(){
    this.Tikla=!this.Tikla;
  }



  changeHandler(event){
     
       
    if (event.target.value.length >=0 ) {
        this.sehirName=event.target.value;
   

    }
     


    }

   
   

  }







