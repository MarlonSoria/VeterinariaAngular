import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Trabajador } from 'src/app/model/trabajador';
import { TrabajadorService } from 'src/app/service/trabajador.service';

@Component({
  selector: 'app-trabajador-modal',
  templateUrl: './trabajador-modal.component.html',
  styleUrls: ['./trabajador-modal.component.css']
})
export class TrabajadorModalComponent implements OnInit {

  trabajador: Trabajador;

  constructor(
    private dialogRef: MatDialogRef<TrabajadorModalComponent>,
    private trabajadorService: TrabajadorService,
    @Inject(MAT_DIALOG_DATA) private data: Trabajador) { }

  ngOnInit(): void {
    this.trabajador = new Trabajador();

     // Verificar si los datos se están recibiendo correctamente
     console.log('Data recibida:', this.data);

     if (this.data) {
      this.trabajador.id_trabajador=this.data.id_trabajador;
      this.trabajador.nombre=this.data.nombre;
      this.trabajador.apellido=this.data.apellido;
      this.trabajador.celular=this.data.celular;
      this.trabajador.fch_nacimiento=this.data.fch_nacimiento;
      this.trabajador.correo=this.data.correo;
    } else {
      this.trabajador = new Trabajador();
    }
  }

  aceptar(){
    if(this.trabajador !=null && this.trabajador.id_trabajador > 0){
        this.trabajadorService.editar(this.trabajador).subscribe(()=>{
      return this.trabajadorService.listar().subscribe(data=>{
        this.trabajadorService.trabajadorActualizar.next(data);
      })
    });
    }else{
      this.trabajadorService.registrar(this.trabajador).subscribe(()=>{
        this.trabajadorService.listar().subscribe(data =>{
          this.trabajadorService.trabajadorActualizar.next(data);
        })
      })
    }
    this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();
  }



}
