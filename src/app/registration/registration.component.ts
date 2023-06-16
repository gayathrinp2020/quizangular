import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  username = '';
  email = '';
  password = '';
  constructor(private http: HttpClient) {}
  register() {
    const registrationData: {
      username: string;
      email: string;
      password: string;
    } = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    console.log(this.username);
    console.log('Registration form submitted:', registrationData);

    this.http
      .post(
        'https://express-service-uihy.onrender.com/api/register',
        registrationData
      )
      .subscribe(
        (response) => {
          console.log('Registration successful:', response);
        }
        // (error) => {
        //   console.log('Registration error:', error);
        // }
      );

    // Reset the form after registration logic
    this.username = '';
    this.email = '';
    this.password = '';
  }
}
