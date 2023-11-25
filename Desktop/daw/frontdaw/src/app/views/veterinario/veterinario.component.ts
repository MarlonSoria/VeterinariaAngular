import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Veterinario } from 'src/app/model/veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { ConfirmDialogVetComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {
  displayedColumns = ['id','nombre','apellidos','celular','fch_nacimiento','email','direccion','especialidad','editar-eliminar'];
  dataSource: MatTableDataSource<Veterinario>

  constructor(
    private dialog: MatDialog,
    private veterinarioService: VeterinarioService) { }

  ngOnInit(): void {
    this.veterinarioService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  onDelete(id: number) {
    let dialogRef = this.dialog.open(ConfirmDialogVetComponent,{
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(estado => {
      if (estado) {
        this.veterinarioService.eliminar(id).subscribe(()=>{
          this.veterinarioService.listar().subscribe(data => {
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
    });
  }

}
