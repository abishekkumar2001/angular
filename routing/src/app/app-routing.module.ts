import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {component:HomeComponent,path:'home'},
  //To display a default path specify like this ... {component:HomeComponent,path:''}
  {component:ContactComponent,path:'contact/:id'},
  //To handle the data like id specify the path as contact/:id
  {component:AboutComponent,path:'about'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
