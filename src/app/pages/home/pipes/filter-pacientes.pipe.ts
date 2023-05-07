import { Pipe, PipeTransform } from '@angular/core';
import { Pacientes } from '../../invitaciones/models/invitaciones.models';
import { PacientePsicologo } from 'src/app/core/models/user';

@Pipe({
  name: 'filterPacientes',
})
export class FilterPacientesPipe implements PipeTransform {
  transform(value: PacientePsicologo[], arg?: string): PacientePsicologo[] {
    if (!arg || arg.trim() === '') {
      return value;
    }
    return value.filter(
      (paciente) =>
        paciente.id_paciente.name.toLowerCase().includes(arg.toLowerCase()) ||
        paciente.id_paciente.email.toLowerCase().includes(arg.toLowerCase())
    );
  }
}
