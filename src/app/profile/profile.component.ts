import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  responseData: any[] = [];
  isAuthenticated: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.profile();
  }

  profile() {
    this.authService.setAuthenticated(true);
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const headers = { Authorization: `${token}` };

    this.http
      .get<any>(
        `https://express-service-uihy.onrender.com/api/profile?username=${username}`,
        {
          headers,
        }
      )
      .subscribe((response: any) => {
        this.responseData = response;
      });
  }
}
