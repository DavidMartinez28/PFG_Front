import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitacionesPacientesRoutingModule } from './invitaciones-pacientes-routing.module';
import { InvitacionesPacientesComponent } from './invitaciones-pacientes.component';


@NgModule({
  declarations: [
    InvitacionesPacientesComponent
  ],
  imports: [
    CommonModule,
    InvitacionesPacientesRoutingModule
  ]
})
export class InvitacionesPacientesModule { }
