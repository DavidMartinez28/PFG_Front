import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { PsicologoServiceService } from 'src/app/core/services/psicologo-service.service';
import { Sesion } from 'src/app/pages/sesiones/models/sesiones';

@Component({
  selector: 'app-psicologos-sesiones',
  templateUrl: './psicologos-sesiones.component.html',
  styleUrls: ['./psicologos-sesiones.component.css']
})
export class PsicologosSesionesComponent {

  @Input() public psicologoId?: string;
  private pacienteId?: string;
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
    this.pacienteId = this.authService.getUserId();
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
}

