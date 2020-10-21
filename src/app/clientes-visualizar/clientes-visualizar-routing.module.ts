import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesVisualizarPage } from './clientes-visualizar.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesVisualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesVisualizarPageRoutingModule {}
