import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
 {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
 },
 {
  path: 'login',
  loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
 },
 {
  path: 'clientes',
  loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule),
  canActivate : [AngularFireAuthGuard],
  data : {authGuardPipe : redirectToLogin}
 },
 {
  path: 'clientes-novo',
  loadChildren: () => import('./clientes-novo/clientes-novo.module').then( m => m.ClientesNovoPageModule),
  canActivate : [AngularFireAuthGuard],
  data : {authGuardPipe : redirectToLogin}
 },
 {
  path: 'sair',
  loadChildren: () => import('./sair/sair.module').then( m => m.SairPageModule),
  canActivate : [AngularFireAuthGuard],
  data : {authGuardPipe : redirectToLogin}
 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
