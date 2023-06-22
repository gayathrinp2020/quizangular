import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-passreset',
  templateUrl: './passreset.component.html',
  styleUrls: ['./passreset.component.css'],
})
export class PassresetComponent {
  email = '';
  newpassword = '';
  confirmPassword: '' = '';
  constructor(private http: HttpClient) {}

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
    console.log(this.email, this.newpassword);
    this.http
      .post('http://localhost:3000/reset_password', resetData)
      .subscribe((response) => {
        console.log(response); // Password reset successful
      });
    this.email = '';
    this.newpassword = '';
    this.confirmPassword = '';
  }
}
