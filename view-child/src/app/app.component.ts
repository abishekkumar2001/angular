import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'Data transfer using view-child';

  @ViewChild(ChildComponent) childData !: ChildComponent

  message1 = '';
  message2 = ''

  ngAfterViewInit(): void {
    this.message1=(this.childData.childData1)
    this.message2=(this.childData.childData2)
  }
}
