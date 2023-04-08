import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesSiteComponent } from './pacientes-site.component';

const routes: Routes = [
  {
    path: '',
    component: PacientesSiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesSiteRoutingModule { }
