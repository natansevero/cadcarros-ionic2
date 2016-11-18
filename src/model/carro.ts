import { Injectable } from '@angular/core';

@Injectable()
export class Carro {
  private placa: string;
  private fabricante: string;
  private modelo: string;
  private cor: string;
  private ano: number;

  constructor(){

  }

  getPlaca() : string {
    return this.placa;
  }

  setPlaca(placa: string) : void {
    this.placa = placa;
  }

  getFabricante() : string {
    return this.fabricante;
  }

  setFabricante(fabricante: string) : void {
    this.fabricante = fabricante;
  }

  getModelo() : string {
    return this.modelo;
  }

  setModelo(modelo: string) : void {
    this.modelo = modelo;
  }

  getCor() : string {
    return this.cor;
  }

  setCor(cor: string) : void {
    this.cor = cor;
  }

  getAno() : number {
    return this.ano;
  }

  setAno(ano: number) : void {
    this.ano = ano;
  }

}
