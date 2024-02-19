import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  message:any=''

  ngOnInit(): void {
    this.message=this.route.snapshot.paramMap.get('id')
  }

}
