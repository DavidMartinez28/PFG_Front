import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitacionesComponent } from './invitaciones.component';
import { InvitacionesModule } from './invitaciones.module';

const routes: Routes = [
  {
    path: '',
    component: InvitacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitacionesRoutingModule { }
