import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabajador } from '../model/trabajador';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  trabajadorActualizar = new Subject<Trabajador[]>();

  private listaTrabajadores: string = 'http://localhost:9001/trabajador/trabajadores'
  private eliminaTrabajador: string = 'http://localhost:9001/trabajador/eliminar'
  private editaTrabajador: string = 'http://localhost:9001/trabajador/actualizar'
  private registraTrabajador: string = 'http://localhost:9001/trabajador/guardar'

  constructor(private http: HttpClient) { }


  listar(){
    return this.http.get<Trabajador[]>(this.listaTrabajadores);
   }
 
   eliminar(id: number){
     return this.http.delete(`${this.eliminaTrabajador}/${id}`)
   }
 
   editar(trabajador: Trabajador){
     return this.http.put(this.editaTrabajador, trabajador)
   }
 
   registrar(trabajador: Trabajador){
     return this.http.post(this.registraTrabajador, trabajador)
   }









}
