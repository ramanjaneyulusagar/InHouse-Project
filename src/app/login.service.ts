import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient) { }
  login(email:string,password:string) {
   return this.httpclient.post("http://localhost:3000/profile",{email,password});   
  }

  logout() {
    localStorage.removeItem('admin');
  }

  public get loggedin(): boolean {
    return (localStorage.getItem('admin') !== null);

  }

  loginvalid() {
    return this.httpclient.get("http");
  }

  
}
