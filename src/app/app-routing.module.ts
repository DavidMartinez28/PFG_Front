import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pacientes'
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pages/home/home.module').then(h=> h.HomeModule)
  },
  {
    path: 'invitaciones',
    loadChildren: () => import('./pages/invitaciones/invitaciones.module').then(i => i.InvitacionesModule)
  },
  {
    path: 'sesiones',
    loadChildren: () => import('./pages/sesiones/sesiones.module').then(i => i.SesionesModule)
  },
  {
    path: '**',
    redirectTo: 'pacientes'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
