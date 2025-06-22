import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PrimeNG } from 'primeng/config';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',

})
export class AppComponent implements OnInit {
  title = 'fsdev';
  constructor(private _spinner: NgxSpinnerService, private _toastr: ToastrService, private primeng: PrimeNG, private router: Router, private httpcomp: HttpClient, private formBuilder: FormBuilder,) { }
  isVisible = false;
  showMore = true;

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`])
  }
  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
