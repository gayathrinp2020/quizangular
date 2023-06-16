import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';
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

    console.log(this.username, this.password);

    this.http
      .post('https://express-service-uihy.onrender.com/api/login', loginData)
      .subscribe(
        (response: any) => {
          console.log(response);
          localStorage.setItem('token', response.token);
          window.open('/quizpage', '_self');
        },
        // Handle login error
        (error: any) => {
          // console.error('Login error:', error);
          alert('Not a Registered user');
        }
      );

    // Reset the form after login logic
    this.username = '';
    this.password = '';
  }
}
