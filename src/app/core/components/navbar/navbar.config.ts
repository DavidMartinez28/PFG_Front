import { NavbarOptions } from './models/navbar.models';

export const psicologoNavbar: NavbarOptions[] = [
  { texto: 'Pacientes', enlace: 'pacientes', icono: 'fa fa-address-card iconos'},
  { texto: 'Invitaciones', enlace: 'invitaciones-pendientes', icono: 'fa fa-paper-plane iconos'},
  { texto: 'Sesiones', enlace: 'sesiones' , icono: 'fa fa-calendar iconos'},
];


export const pacienteNavbar: NavbarOptions[] = [
    { texto: 'Psicologos', enlace: 'psicologos', icono: 'fa fa-address-card iconos'},
    { texto: 'Invitaciones', enlace: 'invitaciones-pacientes', icono: 'fa fa-paper-plane iconos'},
    { texto: 'Sesiones', enlace: 'sesiones-pacientes', icono: 'fa fa-calendar iconos'},
  ];
