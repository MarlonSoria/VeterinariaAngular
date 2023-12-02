import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mascota } from '../model/mascota';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  mascotaActualizar = new Subject<Mascota[]>();

  private listaMas: string = 'http://localhost:9001/mascota/mascotas'
  private eliminaMas: string = 'http://localhost:9001/mascota/eliminar'
  private editaMas: string = 'http://localhost:9001/mascota/actualizar'
  private registraMas: string = 'http://localhost:9001/mascota/guardar'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Mascota[]>(this.listaMas);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.eliminaMas}/${id}`);
  }

  editar(mascota: Mascota) {
    return this.http.put(this.editaMas, mascota);
  }

  registrar(mascota: Mascota) {
    return this.http.post(this.registraMas, mascota);
  }







}
