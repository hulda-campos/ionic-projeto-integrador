import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesExcluirPageRoutingModule } from './clientes-excluir-routing.module';

import { ClientesExcluirPage } from './clientes-excluir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesExcluirPageRoutingModule
  ],
  declarations: [ClientesExcluirPage]
})
export class ClientesExcluirPageModule {}
