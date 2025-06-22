import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private httpcomp: HttpClient, private apiService: ApiService) { }

  form: FormGroup;
  formEditor: FormGroup;
  items: any[] = [];

  ngOnInit() {
  }
}
