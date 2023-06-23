import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  isAuthenticated: boolean = false;
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    // this.authService.setAuthenticated(true);
    // localStorage.clear();
    // this.router.navigate(['/login']);
  }
}
