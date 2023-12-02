import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EspecialidadVet } from '../model/especialidadvet';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadVetService {

  especialidadActualizar = new Subject<EspecialidadVet[]>();

  private listaEsp: string = 'http://localhost:9001/especialidad/especialidades';
  private eliminaEspecialidad: string = 'http://localhost:9001/especialidad/eliminar'
  private editaEspecialidad: string = 'http://localhost:9001/especialidad/actualizar'
  private registraEspecialidad: string = 'http://localhost:9001/especialidad/guardar'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<EspecialidadVet[]>(this.listaEsp);
  }
  
  eliminar(id: number){
    return this.http.delete(`${this.eliminaEspecialidad}/${id}`)
  }

  editar(especialidad: EspecialidadVet){
    return this.http.put(this.editaEspecialidad, especialidad)
  }

  registrar(especialidad: EspecialidadVet){
    return this.http.post(this.registraEspecialidad, especialidad)
  }

}
