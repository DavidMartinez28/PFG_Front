import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public userLoged:boolean = false;
  constructor(
    public authService: AuthService,
  ) {  
     this.authService.userLoged$.subscribe(isloged => {
        this.userLoged = isloged
     }); 
  }

}
