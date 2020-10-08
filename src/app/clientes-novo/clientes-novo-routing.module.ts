import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesNovoPage } from './clientes-novo.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesNovoPageRoutingModule {}
