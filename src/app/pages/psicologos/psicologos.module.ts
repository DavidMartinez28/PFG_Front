import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PsicologosRoutingModule } from './psicologos-routing.module';
import { PsicologosComponent } from './psicologos.component';
import { FilterPsicologosPipe } from './pipes/filter-psicologos.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PsicologosComponent,
    FilterPsicologosPipe
  ],
  imports: [
    CommonModule,
    PsicologosRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class PsicologosModule { }
