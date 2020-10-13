import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  lista : Cliente[] = [];

  constructor(private clienteServ : ClienteService) { }

  ngOnInit() {
    this.clienteServ.listaDeClientes().subscribe(response=>{
      //o servidor respondeu
      console.log(response); //remover, apenas para testar no console 
      this.lista = response;
      console.log(this.lista); //remover, apenas para testar no console 

    },err=>{
      //erro
    })
  }
  

}
