import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']  // fix typo here
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

 onSubmit(): void {
  if (this.loginForm.invalid) {
    return;
  }

  const { email, password } = this.loginForm.value;

  this.apiService.login({ email, password }).subscribe({
    next: () => {
      // Store email
      localStorage.setItem('userEmail', email);

      // Fetch full user details using email
      this.apiService.getUserByEmail(email).subscribe({
        next: (user) => {
          localStorage.setItem('firstName', user.firstName);
          this.router.navigate(['/account']);
        },
        error: (err) => {
          console.error('Error fetching user details:', err);
          this.router.navigate(['/account']);
        }
      });
    },
    error: (err) => {
      this.errorMessage = 'Invalid email or password.';
      console.error(err);
    }
  });
}

}
