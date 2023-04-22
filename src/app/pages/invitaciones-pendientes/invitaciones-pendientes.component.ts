import { Component, OnInit } from '@angular/core';
import { PsicologoServiceService } from 'src/app/core/services/psicologo-service.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Invitaciones, InvitacionesPendientes } from '../invitaciones/models/invitaciones.models';

@Component({
  selector: 'app-invitaciones-pendientes',
  templateUrl: './invitaciones-pendientes.component.html',
  styleUrls: ['./invitaciones-pendientes.component.css']
})
export class InvitacionesPendientesComponent implements OnInit {
  invitaciones: InvitacionesPendientes[] = [];

  constructor(
    public psicologoService: PsicologoServiceService,
    public authService: AuthService,
    ) {}

    ngOnInit(): void {
       this.getInvitaciones();
    }

  deleteInvitacion(id: string){
    this.psicologoService.deleteInvitacion(id).subscribe(() => {
       this.getInvitaciones();
    });
   
  }

  getInvitaciones() {
    const psicologoId = this.authService.getUserId();
    if (psicologoId) {
      this.psicologoService.getInvitaciones(psicologoId).subscribe((data) => {
        this.invitaciones = data;
      });
    }
  }

}
