import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
@Component({
    selector: 'app-home',
    templateUrl: './Home.component.html',
    styleUrls: ['./Home.component.less']
})
export class HomeComponent  {

    constructor(private authservice:AuthService)
{}
logout(){
    this.authservice.logout()

}

}
