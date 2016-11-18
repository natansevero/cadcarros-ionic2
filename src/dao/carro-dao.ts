import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Carro } from '../model/carro';

@Injectable()
export class CarroDao {
  constructor(private storage: Storage) {  }

  add(carro: Carro) : void {
    this.storage.set(carro.getPlaca(), carro).then(() => {
      console.log("Carro Adicioando: ", carro.getPlaca());
    }, (err) => {
      console.log("Error ao adicionar: " , err);
    })
  }

  delete(placa: string) : void {
    console.log("delete: ", placa);
    this.storage.remove(placa);
  }

  update(placa: string) : void {

  }

  list() : Array<any> {
    let carros: Array<any> = [];

    this.storage.forEach((data) => {
      console.log(data);
      carros.push(data);
    }).catch(err => {
      console.log("Error: " , err);
    });

    return carros;
  }


}
