import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EspecialidadVet } from 'src/app/model/especialidadvet';
import { Veterinario } from 'src/app/model/veterinario';
import { EspecialidadVetService } from 'src/app/service/especialidad-vet.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-veterinario-modal',
  templateUrl: './veterinario-modal.component.html',
  styleUrls: ['./veterinario-modal.component.css']
})
export class VeterinarioModalComponent implements OnInit {

  veterinario: Veterinario;
  especialidad: EspecialidadVet[];

  constructor(
    private dialogRef: MatDialogRef<VeterinarioModalComponent>,
    private especialidadVetService: EspecialidadVetService,
    private veterinarioService: VeterinarioService,
    @Inject(MAT_DIALOG_DATA) private data: Veterinario) { }

  ngOnInit(): void {
    this.veterinario = new Veterinario();

    if (this.data) {
      this.veterinario.id_veterinario = this.data.id_veterinario;
      this.veterinario.nombre = this.data.nombre;
      this.veterinario.apellidos = this.data.apellidos;
      this.veterinario.celular = this.data.celular;
      this.veterinario.fch_nacimiento = this.data.fch_nacimiento;
      this.veterinario.email = this.data.email;
      this.veterinario.direccion = this.data.direccion;
      this.veterinario.especialidad = this.data.especialidad;

      this.especialidadVetService.listar().subscribe(data => {
        this.especialidad = data;
      })
    } else {
      this.veterinario = new Veterinario();
    }
    
  }

  aceptar() {
    this.veterinarioService.editar(this.veterinario).subscribe(()=>{
      return this.veterinarioService.listar().subscribe(data=>{
        this.veterinarioService.veterinarioActualizar.next(data);
      })
    })
    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();
  }
}
