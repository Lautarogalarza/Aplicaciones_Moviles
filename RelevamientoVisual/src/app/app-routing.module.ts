import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'cosas-feas',
    loadChildren: () => import('./componentes/cosas-feas/cosas-feas.module').then(m => m.CosasFeasPageModule)
  },
  {
    path: 'cosas-lindas',
    loadChildren: () => import('./componentes/cosas-lindas/cosas-lindas.module').then(m => m.CosasLindasPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./componentes/principal/principal.module').then(m => m.PrincipalPageModule)
  },
  {
    path: 'galeria-lindas',
    loadChildren: () => import('./componentes/galeria-linda/galeria-linda.module').then(m => m.GaleriaLindaPageModule)
  },
  {
    path: 'galeria-feas',
    loadChildren: () => import('./componentes/galeria-feas/galeria-feas.module').then(m => m.GaleriaFeasPageModule)
  },
  {
    path: 'mas-votadas-lindas',
    loadChildren: () => import('./componentes/mas-votadas-lindas/mas-votadas-lindas.module').then( m => m.MasVotadasLindasPageModule)
  },
  {
    path: 'mas-votadas-feas',
    loadChildren: () => import('./componentes/mas-votadas-feas/mas-votadas-feas.module').then( m => m.MasVotadasFeasPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
