import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-passreset',
  templateUrl: './passreset.component.html',
  styleUrls: ['./passreset.component.css'],
})
export class PassresetComponent {
  email = '';
  newpassword = '';
  confirmPassword = '';
  resetError = '';
  constructor(private http: HttpClient, private router: Router) {}

  get passwordsDoNotMatch(): boolean {
    return this.newpassword !== this.confirmPassword;
  }

  resetPassword(): void {
    const resetData: {
      email: string;
      newpassword: string;
    } = {
      email: this.email,
      newpassword: this.newpassword,
    };
    this.http
      .post('http://localhost:3000/api/reset_password', resetData)
      .subscribe(
        (response) => {
          console.log(response); // Password reset successful
          this.router.navigate(['/login']);
        },
        (error) => {
          this.resetError = 'Incorrect email'; // Set the error message
        }
      );
    this.email = '';
    this.newpassword = '';
    this.confirmPassword = '';
    this.resetError = '';
  }
}
