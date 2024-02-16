import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Available Fruits'
  //Array
  fruits = [
    "Apple",
    "Orange",
    "Pineapple",
    "Papaya",
    "Guava"
  ]
  //Array of objects
  worldWonders = [
    {  name: 'Great Wall of China', location: 'China'},
    {  name: 'Petra',  location: 'Jordan' },
    {  name: 'Christ the Redeemer', location: 'Brazil'},
    {  name: 'Machu Picchu', location: 'Peru'},
    {  name: 'Chichen Itza', location: 'Mexico' },
    {  name: 'Roman Colosseum', location: 'Italy'},
    {  name: 'Taj Mahal', location: 'India'},
    {  name: 'Great Pyramid of Giza', location: 'Egypt'}
  ];

  //Demo of ngSwitch
  num = 0;
  //Logic implemented in directives.component.html

  //Demo of ngIf
  showMe = true;

  //Demo of ngClass
  enableGreen = true

  //structural directive ngFor
  marks = "Students Exam Marks"
  mark:Mark[] = [
    {'name':'Akshay','tamil': 100, 'english':98, 'maths': 97},
    {'name':'Ajay','tamil': 96, 'english':92, 'maths': 94},
    {'name':'Aravind','tamil': 91, 'english':92, 'maths': 93},
    {'name':'Divya','tamil': 93, 'english':76, 'maths': 79},
    {'name':'vishal','tamil': 100, 'english':100, 'maths': 98}
  ]

}

class Mark{
   name !: string
   tamil !: number
   english !:number
   maths !: number
}



