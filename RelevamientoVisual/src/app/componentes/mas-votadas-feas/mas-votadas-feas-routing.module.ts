import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasVotadasFeasPage } from './mas-votadas-feas.page';

const routes: Routes = [
  {
    path: '',
    component: MasVotadasFeasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasVotadasFeasPageRoutingModule {}
