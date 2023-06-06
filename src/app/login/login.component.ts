import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private http: HttpClient) {}
  login() {
    const loginData: { username: string; password: string } = {
      username: this.username,
      password: this.password,
    };

    this.http.post('/api/login', loginData).subscribe(
      (response) => {
        console.log('Login successful:', response);
      },
      (error) => {
        console.error('Login error:', error);
      }
    );

    // Reset the form after login logic
    this.username = '';
    this.password = '';
  }
}
