import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { PacientesSiteRoutingModule } from './pacientes-site-routing.module';
import { PacienteDatosComponent } from './paciente-datos/paciente-datos.component';

@NgModule({
  declarations: [
    PacienteDatosComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    PacientesSiteRoutingModule,
  ]
})
export class PacientesSiteModule { 
  
}
