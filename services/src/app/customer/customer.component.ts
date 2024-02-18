import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  ngOnInit(): void {
  }
 
  title : string = 'Services';

  users:any;

  constructor(SE:UserService) {
    this.users=SE.getData()
   }

}
