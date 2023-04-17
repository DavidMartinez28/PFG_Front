import { NavbarOptions } from './models/navbar.models';

export const psicologoNavbar: NavbarOptions[] = [
  { texto: 'Pacientes', enlace: 'pacientes', icono: 'fa fa-address-card' },
  { texto: 'Invitaciones', enlace: 'invitaciones', icono: 'fa fa-paper-plane'},
  { texto: 'Sesiones', enlace: 'sesiones' , icono: 'fa fa-calendar'},
];


export const pacienteNavbar: NavbarOptions[] = [
    { texto: 'Psicologos', enlace: 'psicologos', icono: 'fa fa-address-card'},
    { texto: 'Invitaciones', enlace: 'invitaciones-pacientes', icono: 'fa fa-paper-plane'},
    { texto: 'Sesiones', enlace: 'sesiones-pacientes', icono: 'fa fa-calendar'},
  ];
