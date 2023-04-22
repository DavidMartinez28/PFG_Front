import { NavbarOptions } from './models/navbar.models';

export const psicologoNavbar: NavbarOptions[] = [
  { texto: 'Pacientes', enlace: 'pacientes', icono: 'fa fa-address-card iconos'},
  { texto: 'Invitaciones', enlace: 'invitaciones-pendientes', icono: 'fa fa-address-card iconos'},
  { texto: 'Sesiones', enlace: 'sesiones' , icono: 'fa fa-address-card iconos'},
];


export const pacienteNavbar: NavbarOptions[] = [
    { texto: 'Psicologos', enlace: 'psicologos', icono: 'fa fa-address-card iconos'},
    { texto: 'Invitaciones', enlace: 'invitaciones-pacientes', icono: 'fa fa-address-card iconos'},
    { texto: 'Sesiones', enlace: 'sesiones-pacientes', icono: 'fa fa-address-card iconos'},
  ];
