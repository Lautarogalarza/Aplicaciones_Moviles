import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasVotadasFeasPageRoutingModule } from './mas-votadas-feas-routing.module';

import { MasVotadasFeasPage } from './mas-votadas-feas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasVotadasFeasPageRoutingModule
  ],
  declarations: [MasVotadasFeasPage]
})
export class MasVotadasFeasPageModule {}
