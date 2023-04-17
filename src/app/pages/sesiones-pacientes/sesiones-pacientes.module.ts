import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SesionesPacientesRoutingModule } from './sesiones-pacientes-routing.module';
import { SesionesPacientesComponent } from './sesiones-pacientes.component';


@NgModule({
  declarations: [
    SesionesPacientesComponent
  ],
  imports: [
    CommonModule,
    SesionesPacientesRoutingModule
  ]
})
export class SesionesPacientesModule { }
