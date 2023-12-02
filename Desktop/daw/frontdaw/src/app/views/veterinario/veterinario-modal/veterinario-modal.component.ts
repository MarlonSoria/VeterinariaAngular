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
  //Dar nombre diferente de lo que está como objeto en Veterinario
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

      // Crear una copia de la fecha de nacimiento
      const fechaNacimiento = new Date(this.data.fch_nacimiento);
      // Obtener los valores individuales de la fecha
      const year = fechaNacimiento.getFullYear();
      const month = fechaNacimiento.getMonth();
      const day = fechaNacimiento.getDate();
      // Crear una nueva fecha usando los valores individuales (ajustando el mes porque está basado en 0-index)
      // En este caso el dia se le aumenta por 1 debido a que el datePicker aun sigue restando al momento
      // de editar
      this.veterinario.fch_nacimiento = new Date(year, month, day+1);

      this.veterinario.email = this.data.email;
      this.veterinario.direccion = this.data.direccion;
      this.veterinario.especialidadVet = this.data.especialidadVet;

      this.especialidadVetService.listar().subscribe(data => {
        this.especialidad = data;
      })
    } else {
      this.veterinario = new Veterinario();
    }
    
  }

  aceptar() {
    if(this.veterinario != null && this.veterinario.id_veterinario > 0) {
      this.veterinarioService.editar(this.veterinario).subscribe(()=>{
        return this.veterinarioService.listar().subscribe(data=>{
          this.veterinarioService.veterinarioActualizar.next(data);
        })
      });
    }else{
      this.veterinarioService.registrar(this.veterinario).subscribe(()=>{
        this.veterinarioService.listar().subscribe(data =>{
          this.veterinarioService.veterinarioActualizar.next(data);
        })
      });
    }
    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();
  }
}
