import { Component, OnInit } from '@angular/core';
import { PsicologoServiceService } from 'src/app/core/services/psicologo-service.service';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { AuthService } from 'src/app/core/services/auth.service';
import {
  Invitaciones,
  InvitacionesPendientes,
} from '../invitaciones/models/invitaciones.models';


@Component({
  selector: 'app-invitaciones-pacientes',
  templateUrl: './invitaciones-pacientes.component.html',
  styleUrls: ['./invitaciones-pacientes.component.css'],
})
export class InvitacionesPacientesComponent {
  invitaciones: InvitacionesPendientes[] = [];
  successMessage: string = '';

  constructor(
    public psicologoService: PsicologoServiceService,
    public authService: AuthService,
    public pacientesService: PacienteService,
  ) {}

  ngOnInit(): void {
    this.getInvitacionesPacientes();
  }

  getInvitacionesPacientes() {
    const pacienteId = this.authService.getUserId();
    if (pacienteId) {
      this.psicologoService
        .getInvitacionesPacientes(pacienteId)
        .subscribe((data) => {
          this.invitaciones = data;
        });
    }
  }

  crearRelacion(id_psicologo: string) {
    const pacienteId = this.authService.getUserId();
    if (pacienteId) {
      const relacion = {
        id_psicologo,
        id_paciente: pacienteId,
      };
      this.pacientesService.crearRelacion(relacion).subscribe(
        () => {
          this.successMessage = 'La invitación ha sido aceptada con éxito';
          setTimeout(() => {
            this.successMessage = '';
          }, 3000); // 3000 milisegundos = 3 segundos
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  deleteInvitacion(id: string) {
    this.psicologoService.deleteInvitacion(id).subscribe(() => {
      this.getInvitacionesPacientes();
    });
  }
}
