import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  errorMessage = '';

  constructor(private http: HttpClient) {
    this.registrationForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  register() {
    if (this.registrationForm.invalid) {
      return;
    }

    const registrationData = {
      username: this.registrationForm.value.username,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
    };

    console.log('Registration form submitted:');

    this.http
      .post(
        'https://express-service-uihy.onrender.com/api/register',
        registrationData
      )
      .subscribe(
        (response) => {
          console.log('Registration successful:');
        },
        (error) => {
          if (
            error.status === 500 &&
            error.error.error === 'Internal server error'
          ) {
            this.errorMessage = 'Username already exists';
          } else {
            this.errorMessage = 'An error occurred during registration';
          }
          console.log('Registration error:', error);
        }
      );

    this.registrationForm.reset();
  }
}
