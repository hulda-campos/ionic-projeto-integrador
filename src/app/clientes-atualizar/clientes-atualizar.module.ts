import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesAtualizarPageRoutingModule } from './clientes-atualizar-routing.module';

import { ClientesAtualizarPage } from './clientes-atualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ClientesAtualizarPageRoutingModule
  ],
  declarations: [ClientesAtualizarPage]
})
export class ClientesAtualizarPageModule {}
