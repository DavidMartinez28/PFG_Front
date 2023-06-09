import { Component, Input } from '@angular/core';
import { Sesion } from '../../../sesiones/models/sesiones';
import { PsicologoServiceService } from 'src/app/core/services/psicologo-service.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-pacientes-sesiones',
  templateUrl: './pacientes-sesiones.component.html',
  styleUrls: ['./pacientes-sesiones.component.css']
})
export class PacientesSesionesComponent {

  @Input() public pacienteId?: string;
  private psicologoId?: string;
  modalVisible: boolean = false;
  successMessage: string = '';
  public sesionesActuales: boolean = false;
  public sesionesPasadas: boolean = false;

  sesiones?: Sesion[] = [];
  sesionesAntiguas?: Sesion[]  = [];
  sesionesFormateadas: any[] = [];
  sesionesAntiguasFormateadas: any[] = [];

  constructor(
    public psicologoService: PsicologoServiceService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.psicologoId = this.authService.getUserId();
    this.obtenerSesionesPorPacientes();
    this.obtenerSesionesPasadas()
  } 

  private obtenerSesionesPorPacientes() {
    if (!this.psicologoId || !this.pacienteId) { return; }
    this.psicologoService.obtenerSesionesPorPacientes(this.psicologoId, this.pacienteId).subscribe((sesiones) => {
      this.sesiones = sesiones;
          this.sesionesFormateadas = this.sesiones.map((sesion) => {
            const fecha = new Date(sesion.fecha);
            return {
              _id: sesion._id,
              nombrePaciente: sesion.nombrePaciente,
              fecha: fecha.toLocaleDateString(),
              hora: `${fecha.getHours()-2}:${fecha
                .getMinutes()
                .toString()
                .padStart(2, '0')}`,
            };
          });
    });
  }

  private obtenerSesionesPasadas() {
    if (!this.psicologoId || !this.pacienteId) { return; }
    this.psicologoService.obtenerSesionesPasadasPorPacientes(this.psicologoId, this.pacienteId).subscribe((sesiones) => {
      this.sesionesAntiguas = sesiones;
          this.sesionesAntiguasFormateadas = this.sesionesAntiguas.map((sesion) => {
            const fecha = new Date(sesion.fecha);
            return {
              _id: sesion._id,
              nombrePaciente: sesion.nombrePaciente,
              fecha: fecha.toLocaleDateString(),
              hora: `${fecha.getHours()-2}:${fecha
                .getMinutes()
                .toString()
                .padStart(2, '0')}`,
            };
          });
    });
  }

  eliminarSesion(id: string){
    this.psicologoService.eliminarSesion(id).subscribe((res) => {
      this.obtenerSesionesPorPacientes();
      if (res) {
        this.obtenerSesionesPorPacientes()
        this.obtenerSesionesPasadas()
        this.modalVisible = false;
        this.successMessage = 'La sesión ha sido eliminada con éxito';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000); // 3000 milisegundos = 3 segundos
      }
       
    });
   
  }

}
