import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaPartidoPageRoutingModule } from './carga-partido-routing.module';

import { CargaPartidoPage } from './carga-partido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargaPartidoPageRoutingModule
  ],
  declarations: [CargaPartidoPage]
})
export class CargaPartidoPageModule {}
