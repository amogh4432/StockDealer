import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { LoginData } from '../model/LoginData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthserviceService,private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData: LoginData = this.loginForm.value;
      this.authService.login(loginData).subscribe(
        response => {
          console.log('User logged in successfully', response);
          this.router.navigate(['/stocks']);
          // Handle successful login (e.g., save token, redirect)
        },
        error => {
          console.error('Error logging in user', error);
          alert("Invalid username or password");
        }
      );
    } else {
      console.error('All fields are required.');
    }
  }


}
// constructor(
//     private accountServcie: AccountsService,
//     private router: Router
//   ){}
   
//   nameInput = ''
//   emailInput = ''
//   passwordInput = ''
 
//   clearInputValue(){
//     this.nameInput = ''
//     this.emailInput = ''
//     this.passwordInput = ''
//   }
 
//   changeEmail(e:any){
//     this.emailInput= e.target.value
//   }
 
//   changePassword(e:any){
//     this.passwordInput= e.target.value
//   }
 
//   changeName(e:any){
//     this.nameInput = e.target.value
//   }

//   loginUser = async (event: Event) => {
//     event.preventDefault()
 
//     this.accountServcie.authenticate({
//       username: this.emailInput,
//       password: this.passwordInput,
//     }).subscribe({
//       next: (res) => {
//         if(res.status>=400) return;
//         if(res.body?.accessToken){
//           localStorage.setItem("access_token", res.body?.accessToken??'')
//           this.router.navigateByUrl("/home")
//         }
//       }, error: (err)=> {
//         alert("Login Operation Failed")
//       }
//     })
//   }
//   // credentials={
//   //   username:'',
//   //   password:''
//   // }

//   // onSubmit()
//   // {
//   //     console.log("form submitted successfully");
//   // }

// }
