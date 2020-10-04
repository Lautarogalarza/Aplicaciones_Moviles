import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaFeasPage } from './galeria-feas.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaFeasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaFeasPageRoutingModule {}
