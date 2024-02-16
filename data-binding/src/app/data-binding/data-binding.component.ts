import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //One way binding
  firstName : string = 'Sachin'
  lastName = 'Tendulkar'

  //Two way binding
  title = 'Data Binding'

  //Event Binding
  clickCount = 0;
  clickMe(){
    this.clickCount++;
  }
  result : number =1
  multiplyByTwo(){
    this.result  = this.result*2
  }

}
