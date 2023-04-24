import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PsicologosSiteRoutingModule } from './psicologos-site-routing.module';
import { PsicologosSiteComponent } from './psicologos-site.component';
import { PsicologosDocumentsComponent } from './psicologos-documents/psicologos-documents.component';


@NgModule({
  declarations: [
    PsicologosSiteComponent,
    PsicologosDocumentsComponent,
    PsicologosDocumentsComponent
  ],
  imports: [
    CommonModule,
    PsicologosSiteRoutingModule,
    ReactiveFormsModule
  ]
})
export class PsicologosSiteModule { }
