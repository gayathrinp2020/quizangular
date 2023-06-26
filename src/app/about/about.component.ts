import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
    this.checkAuthentication();
    this.authService.setAuthenticated(this.isAuthenticated);
  }

  checkAuthentication() {
    const token = localStorage.getItem('token');
    this.isAuthenticated = !!token;
  }
}
