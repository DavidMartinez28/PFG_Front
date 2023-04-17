import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionesPacientesComponent } from './sesiones-pacientes.component';

const routes: Routes = [
  {
    path: '',
    component: SesionesPacientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SesionesPacientesRoutingModule { }
