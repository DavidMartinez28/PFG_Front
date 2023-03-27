import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [],
  imports: [HttpClientModule, AppRoutingModule],
  exports: [HttpClientModule, AppRoutingModule]
})
export class SharedModule { }
