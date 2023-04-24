import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User, UserResponse } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userForm?: FormGroup;
  user?: UserResponse; //Aquí almacenaremos los datos del usuario logeado

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.authService.userLoged$.subscribe(isloged => {
      if (!this.authService.currentUser || !isloged){
        return
      }
      this.user = this.authService.currentUser;
      this.userForm = this.fb.group({
        email:[this.user.user.email],
        name: [this.user?.profile.name],
        descripcion: [this.user?.profile.descripcion],
        telefono: [this.user?.profile.telefono],
        fecha_nacimiento: [new Date(this.user.profile.fecha_nacimiento).toISOString().substring(0, 10)],
        sexo: [this.user?.profile.sexo],
      });
    }); 
  }

  logOut(){
    this.authService.doLogout();
  }

}