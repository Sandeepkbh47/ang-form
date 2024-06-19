import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RatingComponent } from '../rating/rating.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    MatButtonModule,
    MatSelectModule,
    RatingComponent,
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  loadedFormIndex: any = null;
  savedForms: any[] = [
    {
      username: 'Sandeep',
      email: 'sandeepkbh47@gmail.com',
      empcode: '123WER890',
      city: 'Delhi',
      prj_name: 'RedEye',
      rating: 5,
    },
  ];
  cities: string[] = ['Delhi', 'Gurgaon', 'Pune', 'Noida'];
  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      empcode: ['123WER890', [Validators.required]],
      city: ['', []],
      prj_name: ['', [Validators.required]],
      rating: ['', [Validators.required]],
    });
  }

  ngAfterViewInit() {}

  submitForm() {
    console.log(this.registrationForm.value, this.registrationForm.valid);
    this.savedForms.push(this.registrationForm.value);
  }

  loadForm(index: number) {
    if (index == this.loadedFormIndex) {
      this.registrationForm.reset({});
      this.loadedFormIndex = null;
    } else {
      this.loadedFormIndex = Math.max(index, 0);
      this.registrationForm.reset(this.savedForms[index]);
    }
  }
}
