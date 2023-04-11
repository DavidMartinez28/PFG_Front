import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { PacientesSiteRoutingModule } from './pacientes-site-routing.module';
import { PacienteDatosComponent } from './paciente-datos/paciente-datos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PacientesSiteComponent } from './pacientes-site.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    PacienteDatosComponent,
    PacientesSiteComponent
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
