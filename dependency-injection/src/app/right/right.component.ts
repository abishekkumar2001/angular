import { Component, OnInit } from '@angular/core';
import { MathsService } from '../service/maths.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  providers:[MathsService]
})
export class RightComponent implements OnInit {

  constructor(public maths:MathsService) { }

  ngOnInit(): void {
  }

  increase(){
    this.maths.addOne();
  }
  //This increase function will only affect the right component.... since we have included providers here...

}
