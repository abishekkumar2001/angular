import { Component, OnInit } from '@angular/core';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'app-injectable-forms',
  templateUrl: './injectable-forms.component.html',
  styleUrls: ['./injectable-forms.component.css']
})
export class InjectableFormsComponent implements OnInit {


  ngOnInit(): void {
   
  }

  formData: any = {}; // Object to hold form data

  constructor(public formService: FormsService) { }

  onSubmit(): void {
    this.formService.submitForm(this.formData);
  }

}
