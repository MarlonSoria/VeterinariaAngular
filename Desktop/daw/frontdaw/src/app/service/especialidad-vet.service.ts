import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EspecialidadVet } from '../model/especialidadvet';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadVetService {

  private listaEsp: string = 'http://localhost:9001/especialidad/especialidades';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<EspecialidadVet[]>(this.listaEsp);
  }
}
