import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  /*

  If we need to need to use same data in multiple components ... There duplicates will get created ....
  To avoid this we can make use of services... The data in services will have global access....

  */

  getData(){

    return [ 
      {name:'Akshay',email:'akshay01@gmail.com',phone:'9192876453'},
      {name:'Jadhav',email:'jadhav02@gmail.com',phone:'6367819765'},
      {name:'Riyaz',email:'riyaz2009@gmail.com',phone:'8781234630'},
      {name:'Renuka',email:'renuka1234@gmail.com',phone:'7358863145'},
    ];
    
  }


}
