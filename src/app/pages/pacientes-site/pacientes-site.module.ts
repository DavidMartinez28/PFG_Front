import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { PacientesSiteRoutingModule } from './pacientes-site-routing.module';
import { PacienteDatosComponent } from './paciente-datos/paciente-datos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PacientesSiteComponent } from './pacientes-site.component';
import {MatCardModule} from '@angular/material/card';
import { PacientesDocumentsComponent } from './pacientes-documents/pacientes-documents.component';

@NgModule({
  declarations: [
    PacienteDatosComponent,
    PacientesSiteComponent,
    PacientesDocumentsComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    PacientesSiteRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
  ]
})
export class PacientesSiteModule { 
  
}
