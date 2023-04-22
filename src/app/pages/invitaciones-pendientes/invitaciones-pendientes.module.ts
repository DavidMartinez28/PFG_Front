import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { InvitacionesPendientesRoutingModule } from './invitaciones-pendientes-routing.module';
import { InvitacionesPendientesComponent } from './invitaciones-pendientes.component';


@NgModule({
  declarations: [
    InvitacionesPendientesComponent
  ],
  imports: [
    CommonModule,
    InvitacionesPendientesRoutingModule,
    MatCardModule
  ]
})
export class InvitacionesPendientesModule { }
