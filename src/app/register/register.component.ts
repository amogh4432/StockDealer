import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerData: User = {
    name: '',
    username: '',
    password: ''
  };

  constructor(private userService: UserService,private router: Router) {}

  onSubmit() {
    this.userService.register(this.registerData).subscribe(
      response => {
        console.log('User registered successfully', response);
        this.router.navigate(['/login']);
        
      },
      error => {
        console.error('Error registering user', error);
      }
    );
  }
}
