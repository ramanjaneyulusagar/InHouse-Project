import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { IUsers } from './users';
import {Observable, Subject} from 'rxjs';

interface loginform {
  email:string,password:string
  }
@Injectable({
  providedIn: 'root'
})
export class InhouseService {
  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();
  constructor(private http:HttpClient) {
    this.http.get("http://localhost:3000/profile").subscribe(data => 
    console.log(data))
   }
  login(email:string,password:string){   
    if(email=='admin@gmail.com' && password=='admin@1')
    {
      localStorage.setItem('user','log');
      return true
    }
    return false
     //return this.http.post<loginform>("http://localhost3000/login",data)
  
  }
  logout(){
    localStorage.removeItem('user');
  }
  public get log():boolean{
    return (localStorage.getItem('user')!==null)
  }
 
  // getUsers():Observable<IUsers[]>{
  //   return this.http.get<IUsers[]>("http://localhost:3000/users")
  // }


 
  user(){
   return this.http.get<IUsers>("http://localhost:3000/profile")
  }
  user1(){
    return this.http.get<IUsers>("http://localhost:3000/profile")
   }
}
