import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesAtualizarPage } from './clientes-atualizar.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesAtualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesAtualizarPageRoutingModule {}
