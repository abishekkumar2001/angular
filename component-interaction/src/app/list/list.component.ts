import { Component, OnInit, Input } from '@angular/core';

//To use the input decorator need to import the Input

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('carsInput') cars:string[]=[];

}
