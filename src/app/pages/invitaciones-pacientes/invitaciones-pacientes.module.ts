import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { InvitacionesPacientesRoutingModule } from './invitaciones-pacientes-routing.module';
import { InvitacionesPacientesComponent } from './invitaciones-pacientes.component';


@NgModule({
  declarations: [
    InvitacionesPacientesComponent
  ],
  imports: [
    CommonModule,
    InvitacionesPacientesRoutingModule,
    MatCardModule,
  ]
})
export class InvitacionesPacientesModule { }
