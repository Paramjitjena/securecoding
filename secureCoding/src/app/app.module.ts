import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from '../app/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import {LayoutModule}from '../app/layout/layout.module'
// import { HeaderComponent } from './layout/header/header.component';
// import { FooterComponent } from './layout/footer/footer.component';
import {ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HomeComponent } from "./Home/HomeComponent";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';
import { AddPatient } from './addPatient/addPatient.component';
import { AuthService } from './login/auth.service';
import { CommonService } from 'src/assets/data/services/common.services';


@NgModule({
  declarations: [
    AppComponent,
   // LoginComponent,
    //HeaderComponent,
    //FooterComponent
    HomeComponent,
    AddPatient
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    LayoutModule,
    BrowserAnimationsModule,
   MaterialModule 


  ],
  providers: [AuthService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
