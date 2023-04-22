import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsicologosSiteComponent } from './psicologos-site.component';

const routes: Routes = [
  {
    path: '',
    component: PsicologosSiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsicologosSiteRoutingModule { }
