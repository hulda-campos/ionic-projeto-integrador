import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesVisualizarPageRoutingModule } from './clientes-visualizar-routing.module';

import { ClientesVisualizarPage } from './clientes-visualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesVisualizarPageRoutingModule
  ],
  declarations: [ClientesVisualizarPage]
})
export class ClientesVisualizarPageModule {}
