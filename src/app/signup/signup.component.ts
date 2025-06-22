import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  items: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private httpcomp: HttpClient,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formbuilder();
  }

  formbuilder() {
    this.form = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        pNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
            ),
          ],
        ],
        confirmPassword: ['', Validators.required],
        id: [''], // For future updates
      },
      {
        validators: this.passwordMatchValidator, // ✅ Attach custom validator
      }
    );
  }

  // ✅ Custom password match validator
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

 submit() {
  if (this.form.invalid) {
    return;
  }

  console.log('Form values at submit:', this.form.value);

  const {
    firstName,
    lastName,
    pNumber,
    email,
    password,
    confirmPassword,
  } = this.form.value;

  this.apiService
    .addUser({ firstName, lastName, pNumber, email, password, confirmPassword })
    .subscribe({
      next: (res) => {
        console.log('User added successfully:', res);
        this.form.reset();
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error adding user:', err);
      },
    });
}

}
