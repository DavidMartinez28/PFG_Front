import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'pacientes',
    loadChildren: () => import('./pages/home/home.module').then(h=> h.HomeModule),
    canActivate: [AuthGuard]
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
    path: 'user-profile', loadChildren: () =>
      import('./pages/user-profile/user-profile.module').then(m => m.UserProfileModule),
      canActivate: [AuthGuard] //Con esto protegemos esta ruta
  },
  {
    path: 'sign-up', loadChildren: () =>
      import('./pages/signup/singup.module').then(m => m.SingupModule)
  },
  {
    path: 'log-in', loadChildren: () =>
      import('./pages/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'psicologos', loadChildren: () =>
      import('./pages/psicologos/psicologos.module').then(m => m.PsicologosModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'invitaciones-pacientes', loadChildren: () =>
      import('./pages/invitaciones-pacientes/invitaciones-pacientes.module').then(m => m.InvitacionesPacientesModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'sesiones-pacientes', loadChildren: () =>
      import('./pages/sesiones-pacientes/sesiones-pacientes.module').then(m => m.SesionesPacientesModule),
      canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },

  {
    path: 'pacientes-site/:id',loadChildren: () =>
    import('./pages/pacientes-site/pacientes-site.module').then(p => p.PacientesSiteModule),
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
