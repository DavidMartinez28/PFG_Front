import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SesionesPacientesRoutingModule } from './sesiones-pacientes-routing.module';
import { SesionesPacientesComponent } from './sesiones-pacientes.component';


@NgModule({
  declarations: [
    SesionesPacientesComponent
  ],
  imports: [
    CommonModule,
    SesionesPacientesRoutingModule,
    MatCardModule
  ]
})
export class SesionesPacientesModule { }
