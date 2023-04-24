import { Component } from '@angular/core';
import { Sesion } from '../sesiones/models/sesiones';
import { PsicologoPaciente, UserProfile } from 'src/app/core/models/user';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sesiones-pacientes',
  templateUrl: './sesiones-pacientes.component.html',
  styleUrls: ['./sesiones-pacientes.component.css']
})
export class SesionesPacientesComponent {

  psicologos: PsicologoPaciente[] = [];
  sesiones: Sesion[] = [];
  sesionesFormateadas: any[] = [];
  private paciente?: UserProfile;


  constructor(
    public router: Router,
    public pacienteService: PacienteService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.paciente = this.authService.currentUser?.profile;
    if (this.paciente?._id) {
      this.pacienteService
        .getPsicologos(this.paciente._id)
        .subscribe((data) => {
          this.psicologos = data;
        });
    }
    this.obtenerSesiones()
  }

  obtenerSesiones() {
    if (this.paciente?._id) {
      this.pacienteService
        .getSesionesPaciente(this.paciente._id)
        .subscribe((sesiones) => {
          this.sesiones = sesiones;
          this.sesionesFormateadas = this.sesiones.map((sesion) => {
            const fecha = new Date(sesion.fecha);
            return {
              nombrePsicologo: sesion.nombrePsicologo,
              fecha: fecha.toLocaleDateString(),
              hora: `${fecha.getHours()}:${fecha
                .getMinutes()
                .toString()
                .padStart(2, '0')}`,
            };
          });
        });
    }
  }
  
}

