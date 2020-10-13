import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { AngularFireStorage } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ClienteService{
    cliente : Cliente = new Cliente();

    constructor(private firestore: AngularFirestore){

    }

    listaDeClientes() : Observable<any>{

            //observable -> aguardar resposta do servidor
            return from(new Observable(observe =>{ //converter para observable
                
                // this.firestore.collection('cliente') -> Selecionar a coleção no firestore
                //.snapshotChanges().subscribe -> Tenta buscar no servidor
                // response -> dados baixados do servidor, os clientes
                this.firestore.collection('cliente').snapshotChanges().subscribe(response=>{
                    //transformar response em array de clientes
                    let lista: Cliente[] = [];
                    response.map(obj =>{
                        //será repetido para cada registro, cada registo do firestore se chama obj
                        let cliente: Cliente = new Cliente();
                        cliente.setData(obj.payload.doc.data());  // obj.playload.doc.data() -> Dados de cliente
                        cliente.id = obj.payload.doc.id; // inserindo ID
                        lista.push(cliente);  // adicionando o cliente na lista //
                    });
                    observe.next(lista);
                })

            }))
    }


}