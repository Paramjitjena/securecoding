import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,of } from 'rxjs';
import {User,Users}from '../user'
//import { userInfo } from 'os';
@Injectable()
export class CommonService {
    constructor(private router: Router) {
              }
         initializeData(): Observable<string>  {
         
        localStorage.setItem('users', JSON.stringify(Users));
       
        return of("Data Initialized");

  }
  getPatient():Observable<User[]>{
      let data=JSON.parse(localStorage.getItem('users'));
      return of(data)

  }
  getPatients(id):Observable<User>
  {
  let data=JSON.parse(localStorage.getItem('users'))
  var results;
  for(let i=0;i<data.length;i++)
  {
      if(data[i].id == id)
      {
          results=data[i].id
          break;
      }
          return of(results)
         
  }

  }


  addPatient(patients)
  {
      let data=JSON.parse(localStorage.getItem('users'))
      let aid=[];
      for (let i = 0; i < data.length; i++) {
        aid.push(data[i].id);
    }
    let maxid=Math.max(...aid)
    patients.id=maxid+1
    data.push(patients)
    localStorage.setItem('users',JSON.stringify(data))

  }
}
