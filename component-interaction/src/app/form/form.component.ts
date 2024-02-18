import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cars : string[] =[];
  carName =""
  addCar(){
    this.cars.push(this.carName)
    console.log(this.cars)
    this.carName=''
  }

}
