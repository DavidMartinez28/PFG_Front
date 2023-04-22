import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitacionesPendientesComponent } from './invitaciones-pendientes.component';

const routes: Routes = [
  {
    path: '',
    component: InvitacionesPendientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitacionesPendientesRoutingModule { }
