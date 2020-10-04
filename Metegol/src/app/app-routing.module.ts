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
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./components/resultados/resultados.module').then( m => m.ResultadosPageModule)
  },
  {
    path: 'mejores',
    loadChildren: () => import('./components/mejores/mejores.module').then( m => m.MejoresPageModule)
  },
  {
    path: 'carga-partido',
    loadChildren: () => import('./components/carga-partido/carga-partido.module').then( m => m.CargaPartidoPageModule)
  },
 
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
