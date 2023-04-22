import { Component, OnInit } from '@angular/core';
import { Pacientes } from './models/invitaciones.models';
import { PsicologoServiceService } from 'src/app/core/services/psicologo-service.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

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
    public router: Router
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
    if(this.authService.currentUser){
    const psicologo_nombre= this.authService.currentUser.profile.name;
    console.log(this.authService.currentUser);
    const psicologoId = this.authService.getUserId();
    if (psicologoId) {
      const invitacion = {
        id_psicologo: psicologoId,
        id_paciente: paciente._id,
        estado: "pendiente",
        paciente_nombre: paciente.name,
        psicologo_nombre:  psicologo_nombre
      };
      this.psicologoService.createInvitacion(invitacion).subscribe((data) => {
        console.log(data);
        this.router.navigate(['invitaciones-pendientes']);
      });
    }
  }
  }


}
