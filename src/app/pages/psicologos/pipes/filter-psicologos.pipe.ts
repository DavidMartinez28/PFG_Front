import { Pipe, PipeTransform } from '@angular/core';
import { PsicologoPaciente } from 'src/app/core/models/user';

@Pipe({
  name: 'filterPsicologos'
})
export class FilterPsicologosPipe implements PipeTransform {

  transform(value: PsicologoPaciente[], arg?: string): PsicologoPaciente[] {
    if (!arg || arg.trim() === '') {
      return value;
    }
    return value.filter(
      (psicologo) =>
        psicologo.id_psicologo.name.toLowerCase().includes(arg.toLowerCase()) ||
        psicologo.id_psicologo.email.toLowerCase().includes(arg.toLowerCase())
    );
  }

}
