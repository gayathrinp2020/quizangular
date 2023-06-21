import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isAuthenticated: boolean = false;
  constructor() {
    this.isAuthenticated = localStorage.getItem('token') !== null;
  }
}
