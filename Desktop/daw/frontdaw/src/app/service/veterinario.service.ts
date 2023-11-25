import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veterinario } from '../model/veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {
  private url: string = 'http://localhost:9001/api/clinica/veterinarios'
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Veterinario[]>(this.url);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
