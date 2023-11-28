import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veterinario } from '../model/veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {
  private listaVet: string = 'http://localhost:9001/veterinario/veterinarios'
  private eliminaVet: string = 'http://localhost:9001/veterinario/eliminar'
  private editaVet: string = 'http://localhost:9001/veterinario/actualizar'
  private registraVet: string = 'http://localhost:9001/veterinario/guardar'

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Veterinario[]>(this.listaVet);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.eliminaVet}/${id}`);
  }

  editar(veterinario: Veterinario) {
    return this.http.put(this.editaVet, veterinario);
  }

  registrar(veterinario: Veterinario) {
    return this.http.post(this.registraVet, veterinario);
  }
}
