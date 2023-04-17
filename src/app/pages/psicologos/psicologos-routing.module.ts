import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsicologosComponent } from './psicologos.component';

const routes: Routes = [
  {
    path: '',
    component: PsicologosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsicologosRoutingModule { }
