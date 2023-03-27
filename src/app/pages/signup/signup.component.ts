import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  psicologoForm: FormGroup;
  pacienteForm: FormGroup;
  signupType: string = 'Psicologo';

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.psicologoForm = this.fb.group({
      email: [''],
      password: [''],
      type: ['Psicologo'],
      fecha_nacimiento: [''],
      name: [''],
      correo: [''],
      descripcion: [''],
      telefono: [''],
      sexo: [''],
    });
    this.pacienteForm = this.fb.group({
      email: [''],
      password: [''],
      type: ['Paciente'],
      fecha_nacimiento: [''],
      name: [''],
      correo: [''],
      descripcion: [''],
      telefono: [''],
      sexo: [''],
    });
  }

  ngOnInit() {}

  registerUser() {
    if (this.signupType === 'Psicologo') {
      let form = this.psicologoForm;
      this.authService.signUpPsicologo(form.value).subscribe((res) => {
        if (res.result) {
          form.reset();
          this.router.navigate(['log-in']);
        }
      });
    } else {
      let form = this.pacienteForm;
      this.authService.signUpPaciente(form.value).subscribe((res) => {
        if (res.result) {
          form.reset();
          this.router.navigate(['log-in']);
        }
      });
    }
  }
}
