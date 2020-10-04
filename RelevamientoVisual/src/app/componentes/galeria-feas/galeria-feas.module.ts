import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaFeasPageRoutingModule } from './galeria-feas-routing.module';

import { GaleriaFeasPage } from './galeria-feas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaFeasPageRoutingModule
  ],
  declarations: [GaleriaFeasPage]
})
export class GaleriaFeasPageModule {}
