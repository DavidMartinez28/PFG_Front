import { Component, OnInit } from '@angular/core';
import { Pacientes } from './models/invitaciones.models';
import { PsicologoServiceService } from 'src/app/core/services/psicologo-service.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-invitaciones',
  templateUrl: './invitaciones.component.html',
  styleUrls: ['./invitaciones.component.css']
})
export class InvitacionesComponent  implements OnInit{
  pacientes: Pacientes[] = [];
  filterPost = ''

  constructor(
    public psicologoService: PsicologoServiceService,
    public authService: AuthService,
    ) {}
  
  ngOnInit(): void {
    const psicologoId = this.authService.getUserId();
    if (psicologoId) {
      this.psicologoService.getPacientesInvitables(psicologoId).subscribe((data) => {
        this.pacientes = data;
      });
    }
  }

  invite(paciente: Pacientes) {
    const psicologoId = this.authService.getUserId();
    if (psicologoId) {
      const invitacion = {
        id_psicologo: psicologoId,
        id_paciente: paciente._id,
        estado: "pendiente"
      };
      this.psicologoService.createInvitacion(invitacion).subscribe((data) => {
        console.log(data);
      });
    }
  }


}
