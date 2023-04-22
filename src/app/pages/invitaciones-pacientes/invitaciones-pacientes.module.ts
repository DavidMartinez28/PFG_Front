import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { InvitacionesPacientesRoutingModule } from './invitaciones-pacientes-routing.module';
import { InvitacionesPacientesComponent } from './invitaciones-pacientes.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    InvitacionesPacientesComponent
  ],
  imports: [
    CommonModule,
    InvitacionesPacientesRoutingModule,
    MatCardModule,
    ToastrModule
  ]
})
export class InvitacionesPacientesModule { }
