import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CarroModalPage } from '../pages/carro-modal/carro-modal';
import { SeeModalPage } from '../pages/see-modal/see-modal';

import { Storage } from '@ionic/storage';

import { Carro } from '../model/carro';
import { CarroDao } from '../dao/carro-dao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CarroModalPage,
    SeeModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CarroModalPage,
    SeeModalPage
  ],
  providers: [Carro, CarroDao, Storage]
})
export class AppModule {}
