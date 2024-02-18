import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { FormOutputComponent } from './form-output/form-output.component';
import { ListOutputComponent } from './list-output/list-output.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    FormOutputComponent,
    ListOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
