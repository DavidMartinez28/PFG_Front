import { Time } from "@angular/common";

export interface Sesion {
    fecha: Date;
    id_paciente: string;
    id_psicologo: string;
    estado: string;
    nombrePsicologo?: string;
    nombrePaciente?: string;
  }

