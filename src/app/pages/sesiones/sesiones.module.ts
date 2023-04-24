import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SesionesRoutingModule } from './sesiones-routing.module';
import { SesionesComponent } from './sesiones.component';
import { MatCardModule } from '@angular/material/card';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';


@NgModule({
  declarations: [
    SesionesComponent
  ],
  imports: [
    CommonModule,
    SesionesRoutingModule,
    ReactiveFormsModule, 
    MatCardModule,
    FullCalendarModule
  ]
})
export class SesionesModule { }
