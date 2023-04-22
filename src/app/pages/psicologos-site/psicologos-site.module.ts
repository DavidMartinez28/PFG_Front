import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PsicologosSiteRoutingModule } from './psicologos-site-routing.module';
import { PsicologosSiteComponent } from './psicologos-site.component';


@NgModule({
  declarations: [
    PsicologosSiteComponent
  ],
  imports: [
    CommonModule,
    PsicologosSiteRoutingModule,
    ReactiveFormsModule
  ]
})
export class PsicologosSiteModule { }
