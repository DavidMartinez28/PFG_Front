import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitacionesPacientesComponent } from './invitaciones-pacientes.component';

const routes: Routes = [
  {
    path: '',
    component: InvitacionesPacientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitacionesPacientesRoutingModule { }
