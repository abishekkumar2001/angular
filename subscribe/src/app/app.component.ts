import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'subscribe';
  //Subscriber and subscribe()
  constructor(){
    const test$ = new Observable(subscriber => {
      console.log('test');
      subscriber.next('1');
    });
    test$.subscribe(x => {
      console.log(x);
    })
  }
}
