import { Pipe, PipeTransform } from '@angular/core';
import { Pacientes } from '../models/invitaciones.models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Pacientes[], arg?: string): Pacientes[] {
    if (!arg) { return []; }
    return value.filter((paciente) => paciente.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || paciente.email.toLowerCase().indexOf(arg.toLowerCase()) > -1);
  }

}
