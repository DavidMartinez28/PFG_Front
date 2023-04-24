import { Component, Input } from '@angular/core';
import { Documentos } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { PacienteService } from 'src/app/core/services/paciente.service';

@Component({
  selector: 'app-psicologos-documents',
  templateUrl: './psicologos-documents.component.html',
  styleUrls: ['./psicologos-documents.component.css']
})
export class PsicologosDocumentsComponent {

  @Input() public psicologoId?: string;

  documentos?: Documentos[] = [];
  private pacienteId?: string;
 

  constructor(
    public pacientesService: PacienteService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    // Start loading
    this.pacienteId = this.authService.getUserId();
    if (!this.psicologoId || !this.pacienteId) { return; }
    this.pacientesService.getDocumentosVisibles(this.pacienteId, this.psicologoId).subscribe((data) => {
      this.documentos = data;;
    });
  } 
  openDocumento(documento: Documentos) {
    window.open(documento.urlFile, '_blank');
  }
}
