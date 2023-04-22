import { Component } from '@angular/core';
import { PsicologoPaciente } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { PacienteService } from 'src/app/core/services/paciente.service';

@Component({
  selector: 'app-psicologos',
  templateUrl: './psicologos.component.html',
  styleUrls: ['./psicologos.component.css']
})
export class PsicologosComponent {
  psicologos: PsicologoPaciente[] = [];
  constructor(
    public psicologoService: PacienteService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    const psicologoId = this.authService.getUserId();
    if (psicologoId) {
      this.psicologoService.getPsicologos(psicologoId).subscribe((data) => {
        this.psicologos = data;
      });
    }
  }

}
