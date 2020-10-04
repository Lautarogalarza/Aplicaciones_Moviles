import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasVotadasLindasPage } from './mas-votadas-lindas.page';

const routes: Routes = [
  {
    path: '',
    component: MasVotadasLindasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasVotadasLindasPageRoutingModule {}
