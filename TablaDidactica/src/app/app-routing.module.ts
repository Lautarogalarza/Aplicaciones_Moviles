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
    path: 'principal',
    loadChildren: () => import('./components/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'animales/:valorIdioma',
    loadChildren: () => import('./components/animales/animales.module').then( m => m.AnimalesPageModule)
  },
  {
    path: 'numeros/:valorIdioma',
    loadChildren: () => import('./components/numeros/numeros.module').then( m => m.NumerosPageModule)
  },
  {
    path: 'colores/:valorIdioma',
    loadChildren: () => import('./components/colores/colores.module').then( m => m.ColoresPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
