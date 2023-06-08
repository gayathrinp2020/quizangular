import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  openQuizInNewWindow() {
    window.open('/quizpage', '_blank');
  }

  username: string = '';
  password: string = '';
  constructor(private http: HttpClient) {}
  login() {
    const loginData: { username: string; password: string; timestamp: number } =
      {
        username: this.username,
        password: this.password,
        timestamp: Date.now(),
      };
    console.log(this.username);
    console.log(typeof Date.now());

    this.http.post('http://localhost:3000/api/login', loginData).subscribe(
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
