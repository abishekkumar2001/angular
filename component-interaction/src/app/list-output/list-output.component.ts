import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-output',
  templateUrl: './list-output.component.html',
  styleUrls: ['./list-output.component.css']
})
export class ListOutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cars:string[]=[];

  carData(Data:string[]){
    this.cars = Data;
  }

}
