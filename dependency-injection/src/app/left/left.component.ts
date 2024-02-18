import { Component, OnInit } from '@angular/core';
import { MathsService } from '../service/maths.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor(public maths:MathsService) { 
    

  }

  ngOnInit(): void {
  }

  increase(){
    this.maths.addOne()
  }

}
