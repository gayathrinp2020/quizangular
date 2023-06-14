import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

    this.http.post('http://localhost:3000/api/login', loginData).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        window.open('/quizpage', '_self');
      },
      // Handle login error
      (error: any) => {
        console.error('Login error:', error);
        alert('Not a Registered user');
      }
    );

    // Reset the form after login logic
    this.username = '';
    this.password = '';
  }
}
