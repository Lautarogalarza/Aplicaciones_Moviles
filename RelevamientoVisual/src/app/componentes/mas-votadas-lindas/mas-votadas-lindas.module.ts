import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasVotadasLindasPageRoutingModule } from './mas-votadas-lindas-routing.module';

import { MasVotadasLindasPage } from './mas-votadas-lindas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasVotadasLindasPageRoutingModule
  ],
  declarations: [MasVotadasLindasPage]
})
export class MasVotadasLindasPageModule {}
