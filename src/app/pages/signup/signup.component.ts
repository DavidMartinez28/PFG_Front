import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]],
      type: ['Psicologo'],
      fecha_nacimiento: ['', Validators.required],
      name: ['', Validators.required],
      descripcion: [''],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      sexo: ['', Validators.required],
      foto:['https://res.cloudinary.com/dz5dcbc6b/image/upload/v1682358778/perfil_vvau2l.png']
    });
    this.pacienteForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required, Validators.minLength(6)],
      type: ['Paciente'],
      fecha_nacimiento: ['', Validators.required],
      name: ['', Validators.required],
      descripcion: [''],
      telefono: ['',Validators.required, Validators.pattern(/^\d{9}$/)],
      sexo: ['', Validators.required],
      foto:['https://res.cloudinary.com/dz5dcbc6b/image/upload/v1682358778/perfil_vvau2l.png']
    });
  }

  ngOnInit() {}


  registerUser() {
    const form = this.signupType === 'Psicologo' ? this.psicologoForm : this.pacienteForm;
    if (!form.valid) {
      form.markAllAsTouched();
      return;
    }
    this.signup(form);
  }

  private signup(form: FormGroup) {
    this.authService.signup(form.value).subscribe((res) => {
      if (res.result) {
        form.reset();
        this.router.navigate(['log-in']);
      }
    });
  }
}
