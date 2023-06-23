import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isAuthenticated: boolean = false;
  username: string = '';
  password: string = '';
  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  login() {
    const loginData: { username: string; password: string } = {
      username: this.username,
      password: this.password,
    };

    this.http
      .post('https://express-service-uihy.onrender.com/api/login', loginData)
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userid', response.data);
          // Update the authentication status using AuthService
          this.authService.setAuthenticated(true);

          this.router.navigate(['/quizpage']);
        },
        // Handle login error
        (error: any) => {
          alert('Not a Registered user');
        }
      );

    // Reset the form after login logic
    this.username = '';
    this.password = '';
  }
}
