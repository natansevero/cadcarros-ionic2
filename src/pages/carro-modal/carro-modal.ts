import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { Carro } from '../../model/carro';

@Component({
  selector: 'page-carro-modal',
  templateUrl: 'carro-modal.html'
})
export class CarroModalPage {

  placa: string;
  fabricante: string;
  modelo: string;
  cor: string;
  ano: number;

  colorPage: string;
  name: string;

  carroEdit: Carro;

  constructor(public navCtrl: NavController, private viewCtrl: ViewController,
              private carro: Carro, private params: NavParams) {

              }

  ionViewDidLoad() {
    console.log('Hello CarroModalPage Page');
    this.colorPage = this.params.get('color');
    this.name = this.params.get('name');

    this.carro = this.params.get('carro') || {};
    console.log(this.carro);

  }

  close() : void {
    this.viewCtrl.dismiss();
  }

  salvar(): void {
    if(this.placa == ""){
      console.log("Placa vazia");
    } else {
      this.carro.setPlaca(this.placa);
      this.carro.setFabricante(this.fabricante);
      this.carro.setModelo(this.modelo);
      this.carro.setCor(this.cor);
      this.carro.setAno(this.ano);
    }

    console.log(this.carro);

    this.viewCtrl.dismiss(this.carro);
  }

}
