import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { url } from 'inspector';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes-visualizar',
  templateUrl: './clientes-visualizar.page.html',
  styleUrls: ['./clientes-visualizar.page.scss'],
})
export class ClientesVisualizarPage implements OnInit {

  cliente : Cliente = new Cliente();

  constructor(private clienteServ : ClienteService,
    private route: ActivatedRoute,
    private navCtrl : NavController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      
      this.clienteServ.buscarPorId(id).subscribe(response=>{
        this.cliente = response;
      
      })
    })
  }

  atualizar(){
    this.navCtrl.navigateForward(['/clientes-atualizar',this.cliente.id])
  }

  excluir(){
    this.navCtrl.navigateForward(['/clientes-excluir',this.cliente.id])
  }
}
