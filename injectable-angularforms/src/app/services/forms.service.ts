import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  constructor() { }

  submitForm(formData: any): void {
    // Logic for form submission goes here
    console.log('Form data submitted:', formData);
  }
}
