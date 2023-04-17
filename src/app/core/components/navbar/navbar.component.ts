import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { NavbarOptions} from './models/navbar.models';
import { pacienteNavbar, psicologoNavbar } from './navbar.config';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMobile?: boolean;
  user?: UserResponse;
  navbarOptions: NavbarOptions[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (!this.authService.currentUser){
      return 
    }
    this.user = this.authService.currentUser;
    this.setUserNavbarOptions();

    this.checkIfMobile();
    window.addEventListener('resize', () => {
      this.checkIfMobile();
    });
  }
  
  checkIfMobile() {
    this.isMobile = window.innerWidth < 768;
  }
  
  public isNavbarCollapsed: boolean = false;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  
  setUserNavbarOptions() {
    this.navbarOptions = this.user?.user.type === 'Psicologo' ? psicologoNavbar : pacienteNavbar;
  }
}
