import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Cliente } from '../model/cliente';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteActualizar = new Subject<Cliente[]>();

  private listaClientes: string = 'http://localhost:9001/cliente/clientes'
  private eliminaCliente: string = 'http://localhost:9001/cliente/eliminar'
  private editaCliente: string = 'http://localhost:9001/cliente/actualizar'
  private registraCliente: string = 'http://localhost:9001/cliente/guardar'

  constructor(private http: HttpClient) { }

  listar(){
   return this.http.get<Cliente[]>(this.listaClientes);
  }

  eliminar(id: number){
    return this.http.delete(`${this.eliminaCliente}/${id}`)
  }

  editar(cliente: Cliente){
    return this.http.put(this.editaCliente, cliente)
  }

  registrar(cliente: Cliente){
    return this.http.post(this.registraCliente, cliente)
  }


}
