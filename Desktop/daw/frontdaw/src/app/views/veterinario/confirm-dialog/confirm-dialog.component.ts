import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogVetComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogVetComponent>
  ) { }

  ngOnInit(): void {
  }

  onEliminar(){
    this.dialogRef.close(true);
  }

  onCancelar() {
    this.dialogRef.close(false);
  }
}
