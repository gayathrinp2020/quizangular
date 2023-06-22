// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {
    const isAuthenticated = localStorage.getItem('token') !== null;
    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Replace '/login' with your login route
      return of(false);
    }
    return of(true);
  }
}
