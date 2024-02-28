import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  signupForm !: FormGroup;

  constructor(private formBuilder:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(){
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      this.authService.signup(formData).subscribe(
        (response: any) => {
          console.log('Signup successful:', response);
          // Reset form after successful signup
          this.signupForm.reset();
        },
        ( error: any) => {
          console.error('Error signing up:', error);
          // Handle error
        }
      );
    }
  }

  signupUser(): void {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      this.authService.signup(formData).subscribe(
        (response: any) => {
          console.log('Signup successful:', response);
          // Reset form after successful signup
          this.signupForm.reset();
        },
        (error: any) => {
          console.error('Error signing up:', error);
          // Handle error
        }
      );
    }
  }
  

}
