import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

import { Carro } from '../../model/carro';

@Component({
  selector: 'page-see-modal',
  templateUrl: 'see-modal.html'
})
export class SeeModalPage {

  carroDetalhes: Array<any>;

  constructor(public navCtrl: NavController, private viewCtrl: ViewController,
              private params: NavParams, private carro: Carro) {
                this.carro = this.params.get('carro');
              }

  ionViewDidLoad() {
    console.log('Hello SeeModalPage Page');
    this.carroDetalhes = [];
    for(let i in this.carro){
      this.carroDetalhes.push(this.carro[i]);
    }
    console.log(this.carroDetalhes);
  }

  close() : void {
    this.viewCtrl.dismiss();
  }

}
