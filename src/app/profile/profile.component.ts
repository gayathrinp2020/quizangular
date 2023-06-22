import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  responseData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.profile();
  }

  profile() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const headers = { Authorization: `${token}` };

    this.http
      .get<any>(`http://localhost:3000/api/profile?username=${username}`, {
        headers,
      })
      .subscribe((response: any) => {
        this.responseData = response;
        response.forEach((data: any, index: number) => {
          console.log(`Data ${index}:`);
          console.log(`Username: ${data.username}`);
          console.log(`Email: ${data.email}`);
          console.log(`Quiz Topic: ${data.quiz_topic}`);
          console.log(`Score: ${data.score}`);
        });
      });
  }
}
