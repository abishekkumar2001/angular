import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formData:any= {};

  submit(){

    // Log the form data
    console.log(this.formData);

    //Password Authentication

    const pwd: string = this.formData.password;
    const confirm_pwd: string = this.formData.confirmPassword;
    console.log('Password:', pwd);
    console.log('Confirm Password:', confirm_pwd);

    if (pwd === confirm_pwd) {
      console.log('Passwords match!');
      // Proceed with further authentication logic or form submission
    } else {
      console.log('Passwords do not match!');
    }
  

  }
}

