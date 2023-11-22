import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente-modal',
  templateUrl: './cliente-modal.component.html',
  styleUrls: ['./cliente-modal.component.css']
})
export class ClienteModalComponent implements OnInit {

  cliente:Cliente;

  constructor(
    private dialogRef: MatDialogRef<ClienteModalComponent>,
    private clienteService: ClienteService,
    @Inject(MAT_DIALOG_DATA) private data: Cliente) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.cliente.id=this.data.id;
    this.cliente.nombre=this.data.nombre;
    this.cliente.apellidos=this.data.apellidos;
    this.cliente.celular=this.data.celular;
    this.cliente.email=this.data.email;
   
  }

  aceptar(){

    this.clienteService.editar(this.cliente).subscribe(()=>{
      return this.clienteService.listar().subscribe(data=>{
        this.clienteService.clienteActualizar.next(data);
      })
    });
    this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();

  }


}
