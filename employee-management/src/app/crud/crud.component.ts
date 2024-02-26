import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  createForm !: FormGroup;

  constructor(private crud:CrudService, private formBuilder:FormBuilder) {

   }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name:['',Validators.required],
      marks:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required]
    })
  }
  
  postEmployee(){
    console.log(this.createForm.value);
    this.crud.createEmployee(this.createForm.value).subscribe((data)=>{
      console.log(data);
    })
  }

}
