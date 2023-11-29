import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoMascota } from '../model/tipomascota';

@Injectable({
  providedIn: 'root'
})
export class TipomascotaService {


  private listatipoMas: string = 'http://localhost:9001/tipomas/tipos';

  constructor(private http: HttpClient) { }


  listar() {
    return this.http.get<TipoMascota[]>(this.listatipoMas);
  }

}
