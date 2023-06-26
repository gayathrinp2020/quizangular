import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    const isAuthenticated = localStorage.getItem('token') !== null;
    if (!isAuthenticated) {
      this.authService.setAuthenticated(false);
      this.router.navigate(['/login']);
    } else {
      this.authService.setAuthenticated(true);
    }
    return of(true);
  }
}
