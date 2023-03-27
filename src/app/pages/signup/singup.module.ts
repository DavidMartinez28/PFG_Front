import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingupRoutingModule } from './singup-routing.module';
import { SignupComponent } from '../signup/signup.component';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SingupRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SingupModule { }
