import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from 'src/app/core/models/user';
import { PacienteService } from 'src/app/core/services/paciente.service';
import { PsicologoServiceService } from 'src/app/core/services/psicologo-service.service';

@Component({
  selector: 'app-psicologos-site',
  templateUrl: './psicologos-site.component.html',
  styleUrls: ['./psicologos-site.component.css']
})
export class PsicologosSiteComponent {
  selectedTab = 'datos';
  psicologo?: UserProfile;
  pacienteForm?: FormGroup;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    public psicologoService: PsicologoServiceService,
    public pacienteService: PacienteService,
    public fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.selectedTab = params['tab'];
    });
    const psicologoId = this.route.snapshot.paramMap.get('id');
    if (psicologoId) {
      this.pacienteService
        .getPsicologoById(psicologoId)
        .subscribe((psicologo) => {
          this.psicologo = psicologo;
          this.initPacienteForm();
        });
    }
  }

  selectTab(tab: string) {
    const psicologoId = this.route.snapshot.paramMap.get('id');
    this.selectedTab = tab;
    this.router.navigate(['psicologos-site', psicologoId], {
      queryParams: { tab },
    });
  }

  initPacienteForm() {
    if (!this.psicologo) {
      return;
    }
    this.pacienteForm = this.fb.group({
      name: [this.psicologo.name],
      email: [this.psicologo.email],
      fecha_nacimiento: [
        new Date(this.psicologo.fecha_nacimiento).toISOString().substring(0, 10),
      ],
      telefono: [this.psicologo.telefono],
      descripcion: [this.psicologo.descripcion],
      sexo: [this.psicologo.sexo],
    });
  }

}
