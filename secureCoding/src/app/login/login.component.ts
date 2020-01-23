import { Component, OnInit } from '@angular/core';
import {Login} from '../../assets/data/login'
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public clientId: any;
  public userName: any;
  public password: any;
  public Existinguser:boolean =false
  public show:boolean=false
  public submitted:boolean= false
  public error:boolean= false

 // public submitted: boolean = false;
  // public error: any;
  public login1 = new Login();

  constructor(private authsvc:AuthService,private route:Router) { 
  //  this.show=false
  }

  ngOnInit() {
  }
login(data)
{
  debugger
  this.submitted = true;
  if (data.invalid)
            return true;
        this.authsvc.logind(data).subscribe((Valid) => {
            if (Valid) {this
               
                 this.route.navigate(['/addpatient']);
             } else {
   
                 this.error = !Valid 
                 //this.route.navigate(['/login'])
             }
             

        })

}
ShowPassword()
{
this.show=!this.show
  // if(x.type === "password")
  // {
  //   x.type= "text"
  // }
  // else
  // {
  //   x.type= "password"

  // }

}
}




