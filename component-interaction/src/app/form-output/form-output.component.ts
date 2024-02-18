import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//Output and EventEmitter is added ...

@Component({
  selector: 'app-form-output',
  templateUrl: './form-output.component.html',
  styleUrls: ['./form-output.component.css']
})
export class FormOutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() carAdded : EventEmitter<string[]> = new EventEmitter;
  cars : string[] =[];
  carName =""
  addCar(){
    this.cars.push(this.carName)
    console.log(this.cars)
    this.carName=''
    this.carAdded.emit(this.cars) //Event which we have created
  }

}
