import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule, matFormFieldAnimations} from '@angular/material/form-field';
import { InvitacionesRoutingModule } from './invitaciones-routing.module';
import { InvitacionesComponent } from './invitaciones.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InvitacionesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    InvitacionesRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class InvitacionesModule { }
