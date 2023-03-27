import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
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
    path: 'user-profile/:id', loadChildren: () =>
      import('./pages/user-profile/user-profile.module').then(m => m.UserProfileModule),
      canActivate: [AuthGuard] //Con esto protegemos esta ruta
  },
  {
    path: 'sign-up', loadChildren: () =>
      import('./pages/signup/singup.module').then(m => m.SingupModule)
  },
  {
    path: 'log-in', loadChildren: () =>
      import('./pages/singing/singing-routing.module').then(m => m.SingingRoutingModule)
  },
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
