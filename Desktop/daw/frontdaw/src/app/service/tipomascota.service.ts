import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoMascota } from '../model/tipomascota';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipomascotaService {

  tipomascotaActualizar = new Subject<TipoMascota[]>();

  private listatipoMas: string = 'http://localhost:9001/tipomas/tipos';
  private eliminaTipomascota: string = 'http://localhost:9001/tipomas/eliminar'
  private editaTipomascota: string = 'http://localhost:9001/tipomas/actualizar'
  private registraTipomascota: string = 'http://localhost:9001/tipomas/guardar'

  constructor(private http: HttpClient) { }


  listar() {
    return this.http.get<TipoMascota[]>(this.listatipoMas);
  }
  eliminar(id: number){
    return this.http.delete(`${this.eliminaTipomascota}/${id}`)
  }

  editar(tipomascota: TipoMascota){
    return this.http.put(this.editaTipomascota, tipomascota)
  }

  registrar(tipomascota: TipoMascota){
    return this.http.post(this.registraTipomascota, tipomascota)
  }

}
