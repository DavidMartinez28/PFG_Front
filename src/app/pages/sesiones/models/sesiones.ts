
export interface Sesion {
  _id: string;
    fecha: Date;
    id_paciente: string;
    id_psicologo: string;
    estado: string;
    nombrePsicologo?: string;
    nombrePaciente?: string;
  }

