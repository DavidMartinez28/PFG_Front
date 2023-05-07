import { FilterPacientesPipe } from './filter-pacientes.pipe';

describe('FilterPacientesPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPacientesPipe();
    expect(pipe).toBeTruthy();
  });
});
