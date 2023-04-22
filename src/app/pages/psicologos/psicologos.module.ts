import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PsicologosRoutingModule } from './psicologos-routing.module';
import { PsicologosComponent } from './psicologos.component';


@NgModule({
  declarations: [
    PsicologosComponent
  ],
  imports: [
    CommonModule,
    PsicologosRoutingModule,
    MatCardModule
  ]
})
export class PsicologosModule { }
