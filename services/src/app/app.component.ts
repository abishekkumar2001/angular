import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'services';

  users:any;

  constructor(SE:UserService){
    this.users=SE.getData();
  }

  // users = [ 
  //   {name:'Akshay',email:'akshay01@gmail.com',phone:'9192876453'},
  //   {name:'Jadhav',email:'jadhav02@gmail.com',phone:'6367819765'},
  //   {name:'Riyaz',email:'riyaz2009@gmail.com',phone:'8781234630'},
  //   {name:'Renuka',email:'renuka1234@gmail.com',phone:'7358863145'},
  // ];
  

}
