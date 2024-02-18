import { Component, OnInit } from '@angular/core';
import { MathsService } from '../service/maths.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  constructor(public maths:MathsService) { }

  ngOnInit(): void {
  }

}
