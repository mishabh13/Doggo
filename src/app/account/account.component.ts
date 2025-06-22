import { Component, OnInit } from '@angular/core';
import { ApiService, User } from '../api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {
  user: User | null = null;
  isEditing: boolean = false;

  formEditor: FormGroup;

  constructor(private api: ApiService, private router: Router, private fb: FormBuilder) {
    // Initialize form with validators and replace yourMessage with email
    this.formEditor = this.fb.group({
      fName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      lName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      pNum: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    const email = localStorage.getItem('userEmail');
    if (email) {
      this.api.getUserByEmail(email).subscribe({
        next: (data: User) => {
          this.user = data;

          // Patch form values from user data
          this.formEditor.patchValue({
            fName: data.firstName,
            lName: data.lastName,
            pNum: data.pNumber,
            email: data.email,
          });
        },
        error: (err: any) => console.error('Error fetching user data:', err),
      });
    }
  }

  updateDetails(): void {
    if (this.user && this.user._id) {
      const updatedData = {
        firstName: this.formEditor.value.fName,
        lastName: this.formEditor.value.lName,
        pNumber: this.formEditor.value.pNum,
        email: this.formEditor.value.email,
      };

      this.api.updateUser(this.user._id, updatedData).subscribe({
        next: (updatedUser: User) => {
          this.user = updatedUser;
          this.isEditing = false;
        },
        error: (err: any) => console.error('Error updating user:', err),
      });
    }
  }
  logout(): void {
  
  localStorage.clear();

  
  alert('You have been logged out.');

  
  this.router.navigate(['/login']);
}

  deleteAccount(): void {
    if (this.user && this.user._id) {
      if (confirm('Are you sure you want to delete your account?')) {
        this.api.deleteUser(this.user._id).subscribe({
          next: () => {
            alert('Account deleted');
            localStorage.clear();
            this.router.navigate(['/signup']);
          },
          error: (err: any) => console.error('Error deleting user:', err),
        });
      }
    }
  }
}
