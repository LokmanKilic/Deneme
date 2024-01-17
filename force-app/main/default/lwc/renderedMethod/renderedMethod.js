import { LightningElement } from 'lwc';
import uyeOl from './uyeOl.html';
import renderedMethod from './renderedMethod.html';
import girisYap from './girisYap.html';

export default class RenderedMethod extends LightningElement {

    secilenButon;

    render(){
        return this.secilenButon==="Giriş Yap" ? girisYap : this.secilenButon ==="Üye Ol" ? uyeOl : this.secilenButon === "Çıkış" ? renderedMethod: renderedMethod
    }
    clickHandler(event){
        this.secilenButon=event.target.label;

    }
}