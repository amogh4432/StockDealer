import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authService: AuthserviceService){} 
 
  logout(){
    this.authService.logout();
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  isLoggedOut(){
    return this.authService.isLoggedOut();
  }

}
