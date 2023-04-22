import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SesionesRoutingModule } from './sesiones-routing.module';
import { SesionesComponent } from './sesiones.component';


@NgModule({
  declarations: [
    SesionesComponent
  ],
  imports: [
    CommonModule,
    SesionesRoutingModule,
    ReactiveFormsModule
  ]
})
export class SesionesModule { }
