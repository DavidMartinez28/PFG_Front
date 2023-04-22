export interface Pacientes{
    name: string;
    email: string;
    _id: string;
}

export interface Invitaciones{
  id_psicologo: string;
  id_paciente: string;
  estado: string;
  paciente_nombre: string;
  psicologo_nombre: string;
 
}

export interface InvitacionesPendientes{
  id_psicologo: string;
  id_paciente: string;
  estado: string;
  paciente_nombre: string;
  psicologo_nombre: string;
  _id: string;
}

export interface Relacion{
  id_psicologo: string;
  id_paciente: string;
}

