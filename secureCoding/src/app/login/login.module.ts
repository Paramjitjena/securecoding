import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { LayoutModule } from '../layout/layout.module';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
    declarations: [
        LoginComponent,
            
    
  ],
    exports: [
 LoginComponent
  
  ],
  providers:[AuthService]
})
export class LoginModule {}