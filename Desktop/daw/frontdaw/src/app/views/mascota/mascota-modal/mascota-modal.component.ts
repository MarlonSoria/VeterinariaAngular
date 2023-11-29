import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from 'src/app/model/cliente';
import { Mascota } from 'src/app/model/mascota';
import { TipoMascota } from 'src/app/model/tipomascota';
import { ClienteService } from 'src/app/service/cliente.service';
import { MascotaService } from 'src/app/service/mascota.service';
import { TipomascotaService } from 'src/app/service/tipomascota.service';

@Component({
  selector: 'app-mascota-modal',
  templateUrl: './mascota-modal.component.html',
  styleUrls: ['./mascota-modal.component.css']
})
export class MascotaModalComponent implements OnInit {


    cli:Cliente[];
    mascota:Mascota;
    tipo:TipoMascota[];

  constructor(
    private tipomascotaService: TipomascotaService,
    private mascotaService: MascotaService,
    private clienteService: ClienteService,
    @Inject(MAT_DIALOG_DATA) private data: Mascota) { }

  ngOnInit(): void {
    
    this.mascota = new Mascota();
    this.mascota.id_mascota = this.data.id_mascota;
    this.mascota.nombre = this.data.nombre;
    this.mascota.fch_nacimiento = this.data.fch_nacimiento;
     this.mascota.peso = this.data.peso;
    this.mascota.informacion = this.data.informacion;
   this.mascota.tipo = this.data.tipo;
   this.mascota.cli = this.data.cli;

    this.tipomascotaService.listar().subscribe(data => {
      this.tipo = data;
    })

    this.clienteService.listar().subscribe(data => {
      this.cli = data;
    })
  }

}
