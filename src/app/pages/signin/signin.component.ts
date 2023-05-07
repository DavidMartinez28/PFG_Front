import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injectable} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signinForm?: FormGroup;
  public errorMessage = ''

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    @Inject(DOCUMENT) public document: Document
  ) {
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  loginUser() {
    this.authService.signIn(this.signinForm?.value).subscribe({
      error: (err) => this.errorMessage = err?.error?.message
    });
  }
}
