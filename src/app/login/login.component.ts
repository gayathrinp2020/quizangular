import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private router: Router, private http: HttpClient) {}

  login() {
    const loginData: { username: string; password: string } = {
      username: this.username,
      password: this.password,
    };
    console.log(this.username, this.password);
    this.http.post('http://localhost:3000/api/login', loginData).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userid', response.data);
        // window.open('/quizpage', '_self');
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
