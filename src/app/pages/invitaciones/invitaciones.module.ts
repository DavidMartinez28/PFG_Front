import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitacionesRoutingModule } from './invitaciones-routing.module';
import { InvitacionesComponent } from './invitaciones.component';


@NgModule({
  declarations: [
    InvitacionesComponent
  ],
  imports: [
    CommonModule,
    InvitacionesRoutingModule
  ]
})
export class InvitacionesModule { }
