import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Documentos, UserProfile } from 'src/app/core/models/user';
import { PsicologoServiceService } from 'src/app/core/services/psicologo-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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

}
