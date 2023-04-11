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
  private fileTmp: any;
  documentos?: Documentos[] = [];

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    public psicologoService: PsicologoServiceService,
    public fb: FormBuilder,
    private authService: AuthService
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
      const psicologoId = this.authService.getUserId();
      if (psicologoId && pacienteId) {
        this.psicologoService.getDocuments(psicologoId, pacienteId).subscribe((data) => {
          this.documentos = data;
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

  getFile($event: any): void {
    const [file] = $event.target.files;
    this.fileTmp = {
      fileRaw: file,
      fileName: file.name,
    };
  }

  sendFile(): void {
    const body = new FormData();
    body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
    body.append('id_psicologo', this.authService.getUserId() || '');
    body.append('id_paciente', this.route.snapshot.paramMap.get('id') || '');
    body.set('estado', 'notVisible');
    this.psicologoService.sendPost(body).subscribe((res) => console.log(res));
    location.reload()
  }

  openDocumento(documento: Documentos) {
    window.open(documento.urlFile, '_blank');
  }

}
