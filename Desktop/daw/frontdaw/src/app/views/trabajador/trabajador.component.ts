import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Trabajador } from 'src/app/model/trabajador';
import { TrabajadorService } from 'src/app/service/trabajador.service';
import { TrabajadorModalComponent } from './trabajador-modal/trabajador-modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit {
  displayedColumns = ['id_trabajador','nombre','apellido','celular','fch_nacimiento','correo','editar-eliminar'];
  dataSource: MatTableDataSource<Trabajador>

  constructor(
    private dialog: MatDialog ,
    private trabajadorService: TrabajadorService
  ) { }

  ngOnInit(): void {
    this.trabajadorService.trabajadorActualizar.subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
    })

    this.trabajadorService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  openModal(trabajador?: Trabajador){
    const trabj = trabajador ? {...trabajador} : new Trabajador();
    this.dialog.open(TrabajadorModalComponent,{
      width:'260px',
      data: trabj
    });
  }

  onDelete(id_trabajador: number){
    let dialogRef = this.dialog.open(ConfirmDialogComponent,{
    });
    dialogRef.afterClosed().subscribe(estado => {
      if(estado){
        this.trabajadorService.eliminar(id_trabajador).subscribe(()=>{
          this.trabajadorService.listar().subscribe(data =>{
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
