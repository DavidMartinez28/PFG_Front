export interface Pacientes{
    name: string;
    email: string;
    _id: string;
}

export interface Invitaciones{
  id_psicologo: string;
  id_paciente: string;
  estado: string;
}