import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmDialogComponent } from './views/cliente/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ClienteModalComponent } from './views/cliente/cliente-modal/cliente-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { VeterinarioComponent } from './views/veterinario/veterinario.component';
import { ConfirmDialogVetComponent } from './views/veterinario/confirm-dialog/confirm-dialog.component';
import { VeterinarioModalComponent } from './views/veterinario/veterinario-modal/veterinario-modal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { TrabajadorComponent } from './views/trabajador/trabajador.component';
import { TrabajadorModalComponent } from './views/trabajador/trabajador-modal/trabajador-modal.component';
import { MascotaComponent } from './views/mascota/mascota.component';
import { MascotaModalComponent } from './views/mascota/mascota-modal/mascota-modal.component';
// Proveedores de servicios para dar idioma al DatePicker
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ConfirmDialogComponent,
    ClienteModalComponent,
    VeterinarioComponent,
    ConfirmDialogVetComponent,
    VeterinarioModalComponent,
    TrabajadorComponent,
    TrabajadorModalComponent,
    MascotaComponent,
    MascotaModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    // Proveedores de servicios para dar idioma al DatePicker
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }, // Establece el idioma en español
    { provide: MAT_DATE_FORMATS, useValue: { display: { dateInput: 'dd/MM/yyyy' } } } // Establece el formato de fecha
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
