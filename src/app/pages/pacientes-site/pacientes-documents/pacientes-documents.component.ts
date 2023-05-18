import { Component, Input } from '@angular/core';
import { Documentos } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { PsicologoServiceService } from 'src/app/core/services/psicologo-service.service';
import { FileDocument } from './models/documents.models';

@Component({
  selector: 'app-pacientes-documents',
  templateUrl: './pacientes-documents.component.html',
  styleUrls: ['./pacientes-documents.component.css']
})
export class PacientesDocumentsComponent {

  @Input() public pacienteId?: string;

  private fileTmp?: FileDocument;
  private fileInput?: HTMLInputElement;
  private psicologoId?: string;
  documentos?: Documentos[] = [];
  loading = false;
  modalVisible: boolean = false;
  successMessage: string = '';

  constructor(
    public psicologoService: PsicologoServiceService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    // Start loading
    this.psicologoId = this.authService.getUserId();
    this.getDocuments();
  } 

  getFile($event: any): void {
    this.fileInput = $event.target;
    if (!this.fileInput?.files) { return; }
    const file = this.fileInput.files.item(0);
    if (!file) { return; }
    this.fileTmp = {
      fileRaw: file,
      fileName: file.name,
    };
  }

  sendFile(): void {
    if (!this.fileTmp) { return; }
    const body = new FormData();
    body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
    body.append('id_psicologo', this.authService.getUserId() || '');
    body.append('id_paciente', this.pacienteId || '');
    body.set('estado', 'notVisible');
    this.loading= true;
    this.psicologoService.sendPost(body).subscribe(() => {
      if (this.fileInput) {
        this.fileInput.value = "";
      }
      this.getDocuments();
      this.loading = false;
    });
    
  }

  openDocumento(documento: Documentos) {
    window.open(documento.urlFile, '_blank');
  }

  toggleVisibility(documento: Documentos) {
    documento.estado = documento.estado === 'visible' ? 'notVisible' : 'visible';
    // Llamas al servicio put con lo que te haga falta
    this.psicologoService.cambiarVisibilidad(documento).subscribe();
  }

  private getDocuments() {
    if (!this.psicologoId || !this.pacienteId) { return; }
    this.psicologoService.getDocuments(this.psicologoId, this.pacienteId).subscribe((data) => {
      this.documentos = data;
    });
  }

  eliminarDocumento(id: string){
    this.psicologoService.eliminarDocumento(id).subscribe((res) => {
      this.getDocuments();
      if (res) {
        this.getDocuments()
        this.modalVisible = false;
        this.successMessage = 'La sesión ha sido eliminada con éxito';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000); // 3000 milisegundos = 3 segundos
      }
       
    });
  }

}
