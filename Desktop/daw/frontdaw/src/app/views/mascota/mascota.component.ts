import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { MascotaModalComponent } from './mascota-modal/mascota-modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  displayedColumns = ['id_mascota','nombre','fch_nacimiento','peso','tipomascota','especialidad','nombrecliente','editar-eliminar'];
  dataSource: MatTableDataSource<Mascota>


  constructor(
    private dialog: MatDialog,
    private mascotaService: MascotaService
  ) { }

  ngOnInit(): void {
    this.mascotaService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  openModal(mascota: Mascota) {
    const mas = mascota ? {...mascota} : new Mascota();
    this.dialog.open(MascotaModalComponent,{
      width:'300px',
      data: mas
    })
  }

  onDelete(id: number) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent,{
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(estado => {
      if (estado) {
        this.mascotaService.eliminar(id).subscribe(()=>{
          this.mascotaService.listar().subscribe(data => {
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
    });
  }







}
