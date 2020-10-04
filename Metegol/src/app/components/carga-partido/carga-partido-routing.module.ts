import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaPartidoPage } from './carga-partido.page';

const routes: Routes = [
  {
    path: '',
    component: CargaPartidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaPartidoPageRoutingModule {}
