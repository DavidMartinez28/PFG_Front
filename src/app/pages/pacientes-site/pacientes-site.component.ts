import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Documentos, UserProfile } from 'src/app/core/models/user';
import { PsicologoServiceService } from 'src/app/core/services/psicologo-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-pacientes-site',
  templateUrl: './pacientes-site.component.html',
  styleUrls: ['./pacientes-site.component.css'],
})
export class PacientesSiteComponent implements OnInit {
  selectedTab = 'datos';
  paciente?: UserProfile;
  pacienteForm?: FormGroup;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    public psicologoService: PsicologoServiceService,
    public fb: FormBuilder,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.selectedTab = params['tab'];
    });
    const pacienteId = this.route.snapshot.paramMap.get('id');
    if (pacienteId) {
      this.psicologoService
        .getPacienteById(pacienteId)
        .subscribe((paciente) => {
          this.paciente = paciente;
          this.initPacienteForm();
        });
    }
  }

  selectTab(tab: string) {
    const pacienteId = this.route.snapshot.paramMap.get('id');
    this.selectedTab = tab;
    this.router.navigate(['pacientes-site', pacienteId], {
      queryParams: { tab },
    });
  }

  initPacienteForm() {
    if (!this.paciente) {
      return;
    }
    this.pacienteForm = this.fb.group({
      name: [this.paciente.name],
      email: [this.paciente.email],
      fecha_nacimiento: [
        new Date(this.paciente.fecha_nacimiento).toISOString().substring(0, 10),
      ],
      telefono: [this.paciente.telefono],
      descripcion: [this.paciente.descripcion],
      sexo: [this.paciente.sexo],
    });
  }

  eliminarPaciente() {
    const psicologoId = this.authService.getUserId();
    if (!this.paciente || !psicologoId) {
      return;
    }
    const pacienteId = this.paciente._id; // Reemplaza 'id' con la propiedad adecuada que contiene el ID del paciente

    this.psicologoService.eliminarPaciente(psicologoId, pacienteId).subscribe(
      () => {
        // Paciente eliminado correctamente, puedes redirigir o realizar otras acciones
        console.log('El paciente ha sido eliminado correctamente.');
        this.router.navigate(['pacientes']);
        
      },
      (error) => {
        console.log('Hubo un error al eliminar el paciente:', error);
      }
    );
  }
}
