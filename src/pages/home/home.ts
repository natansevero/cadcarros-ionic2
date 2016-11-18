import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { CarroModalPage } from '../carro-modal/carro-modal';
import { SeeModalPage } from '../see-modal/see-modal';

import { CarroDao } from '../../dao/carro-dao';
import { Carro } from '../../model/carro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

  listCarros: Array<any>;

  constructor(public navCtrl: NavController, private carro: Carro,
              private dao: CarroDao, private modalCtrl: ModalController) {
      setTimeout(() => {
        this.listCarros = this.dao.list();
      }, 1000);
  }

  addCarro() : void {
    let modal = this.modalCtrl.create(CarroModalPage, {
      color: 'primary',
      name: 'Adicionar'
    });

    modal.onDidDismiss((data) => {
      //console.log(data);

      this.dao.add(data);
      this.listCarros = this.dao.list();
    });

    modal.present();
  }

  deleteCarro(placa: string) : void {
    console.log(placa);
    this.dao.delete(placa);
    this.listCarros = this.dao.list();
  }

  editCarro(c: Carro) : void {
    let modal = this.modalCtrl.create(CarroModalPage, {
      color: 'secondary',
      name: 'Editar',
      carro: c
    });
    modal.present();
  }

  view(c : Carro): void {
    let modal = this.modalCtrl.create(SeeModalPage, {
      carro: c
    });
    modal.present();
  }

}
