import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PsicologosSiteRoutingModule } from './psicologos-site-routing.module';
import { PsicologosSiteComponent } from './psicologos-site.component';
import { PsicologosDocumentsComponent } from './psicologos-documents/psicologos-documents.component';
import { PsicologosSesionesComponent } from './psicologos-sesiones/psicologos-sesiones/psicologos-sesiones.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    PsicologosSiteComponent,
    PsicologosDocumentsComponent,
    PsicologosDocumentsComponent,
    PsicologosSesionesComponent
  ],
  imports: [
    CommonModule,
    PsicologosSiteRoutingModule,
    ReactiveFormsModule,
    MatCardModule
  ]
})
export class PsicologosSiteModule { }
