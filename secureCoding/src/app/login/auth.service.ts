import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Login } from 'src/assets/data/login';


@Injectable()
export class AuthService {
    constructor(private router: Router) {

  }

    get isLogedIn() {
        let isLogin = localStorage.getItem('login');
        if (isLogin && parseInt(isLogin)) {
            return true;
        } else {
            return false;
        }
         
   
    }

    logind( login:Login):Observable<boolean> {
        debugger
        if ( login.ClientID== '1234' && login.Username == 'admin' && login.Password =='admin') {
            localStorage.setItem('login', '1');
            return  of(true)
        } 
        else 
        {
            return of(false)
        }
   
    }
    logout() {
        // this.getAuthenticatedUser().signOut();
        // this.cognitoUser = null;
        localStorage.setItem('isLoggedIn', '0')
        this.router.navigate(['/login']);
      }
}