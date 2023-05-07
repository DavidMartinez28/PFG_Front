import { Component } from '@angular/core';
import { PsicologoServiceService } from 'src/app/core/services/psicologo-service.service';
import { AuthService } from 'src/app/core/services/auth.service';
import {PacientePsicologo} from 'src/app/core/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  pacientes: PacientePsicologo[] = [];
  filterPost= '';
  
  constructor(
    public psicologoService: PsicologoServiceService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    const psicologoId = this.authService.getUserId();
    if (psicologoId) {
      this.psicologoService.getPacientes(psicologoId).subscribe((data) => {
        this.pacientes = data;
      });
    }
  }
}
