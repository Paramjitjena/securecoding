import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent } from './Home/HomeComponent';
import { AddPatient } from './addPatient/addPatient.component';


const routes: Routes = [
  {
     path: 'home',
     component:HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
},
{
  path:'addpatient',
  component:AddPatient

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
