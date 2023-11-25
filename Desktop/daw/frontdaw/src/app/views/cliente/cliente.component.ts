import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ClienteModalComponent } from './cliente-modal/cliente-modal.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  displayedColumns = ['id','nombre','apellidos','celular','email','editar-eliminar'];
  dataSource: MatTableDataSource<Cliente>


  constructor(
    private dialog: MatDialog ,
    private clienteService: ClienteService) { }

  ngOnInit(): void {

    this.clienteService.clienteActualizar.subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
    })

    this.clienteService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  openModal(cliente?: Cliente){
   const client= cliente ! = null ? cliente: new Cliente();
    this.dialog.open(ClienteModalComponent,{
      width:'260px',
      data: client
    })
  }





  onDelete(id: number){
    let dialogRef = this.dialog.open(ConfirmDialogComponent,{
    });
    dialogRef.afterClosed().subscribe(estado => {
      if(estado){
        this.clienteService.eliminar(id).subscribe(()=>{
          this.clienteService.listar().subscribe(data =>{
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
    })
  }

  filtrar(valor: string){
    this.dataSource.filter = valor.trim().toLowerCase();
  }



}
