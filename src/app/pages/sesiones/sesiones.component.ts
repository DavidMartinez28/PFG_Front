import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PacientePsicologo, UserProfile } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { PsicologoServiceService } from 'src/app/core/services/psicologo-service.service';
import { Sesion } from './models/sesiones';

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.css'],
})
export class SesionesComponent {
  sesionForm: FormGroup;
  pacientes: PacientePsicologo[] = [];
  modalVisible: boolean = false;
  successMessage: string = '';

  private psicologo?: UserProfile;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public psicologoService: PsicologoServiceService
  ) {
    this.sesionForm = this.fb.group({
      fecha: [''],
      id_paciente: [''],
    });
  }

  ngOnInit() {
    this.psicologo = this.authService.currentUser?.profile;
    if (this.psicologo?._id) {
      this.psicologoService.getPacientes(this.psicologo._id).subscribe((data) => {
        this.pacientes = data;
      });
    }
  }

  crearSesion() {
    const nombrePsicologo = this.psicologo?.name;
    const nombrePaciente = this.pacientes.find(paciente => paciente.id_paciente._id === this.sesionForm.get('id_paciente')?.value)?.id_paciente.name;
    const session: Sesion = {
      ...this.sesionForm.value,
      estado: 'Pendiente',
      id_psicologo: this.psicologo?._id,
      nombrePaciente,
      nombrePsicologo
    };
    this.psicologoService.crearSesion(session).subscribe((res) => {
      if (res) {
        this.sesionForm.reset();
        this.modalVisible= false;
        this.successMessage = 'La sesión ha sido creada con éxito';
          setTimeout(() => {
            this.successMessage = '';
          }, 3000); // 3000 milisegundos = 3 segundos
      }
    });
  }



}
