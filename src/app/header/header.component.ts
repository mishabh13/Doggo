import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, User } from '../api.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  userName: string = '';

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    const email = localStorage.getItem('userEmail');
    if (email) {
      this.isLoggedIn = true;
      // Fetch user details from API using email
      this.api.getUserByEmail(email).subscribe({
        next: (user: User) => {
          this.userName = user.firstName;
        },
        error: (err) => {
          console.error('Failed to fetch user info:', err);
          this.userName = '';
        }
      });
    } else {
      this.isLoggedIn = false;
      this.userName = '';
    }
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  logout(): void {
    localStorage.clear();
    this.isLoggedIn = false;
    this.userName = '';
    this.router.navigate(['/login']);
  }
}
