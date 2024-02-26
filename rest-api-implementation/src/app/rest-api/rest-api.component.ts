import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent implements OnInit {

  public getJsonValue : any;
  public postJsonValue : any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getMethod();
    this.postMethod();
  }

  public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(data =>{
      console.log(data);
      this.getJsonValue = data;
    });
  }

  public postMethod(){
    let body = {
      title : 'Rest-api',
      body : 'bar',
      userId : 1,
    };
    this.http.post('https://jsonplaceholder.typicode.com/todos',body).subscribe((data) =>{
      console.log(data);
      this.postJsonValue = data;
    });
  }

}
