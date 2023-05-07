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
      this.getFormulario(this.authService.currentUser)
    }); 
  }

  logOut(){
    this.authService.doLogout();
  }

  getFormulario(user: UserResponse){
    this.user = user;
    if(!this.user){return;}
    this.userForm = this.fb.group({
      email:[this.user.user.email],
      name: [this.user?.profile.name],
      descripcion: [this.user?.profile.descripcion],
      telefono: [this.user?.profile.telefono],
      fecha_nacimiento: [new Date(this.user.profile.fecha_nacimiento).toISOString().substring(0, 10)],
      sexo: [this.user?.profile.sexo],
    });
  }
  
  actualizarPerfil(){
    const userId= this.authService.currentUser?.user._id
    if(!userId){return;}
   this.authService.cambiarPerfil(userId,this.userForm?.value).subscribe((data) => {
    this.authService.getUserProfile(data._id).subscribe((user) => {
      this.getFormulario(user);
      
    });
   });
  }

}