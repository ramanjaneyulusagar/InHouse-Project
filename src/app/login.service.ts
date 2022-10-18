import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient) { }
  login(email: string, password: string) {
    // this.loginvalid().subscribe((data: any) => {
    //   console.log(data);
    // })
    if (email == 'email' && password == 'password') {
      localStorage.setItem('admin', 'loggedin');
      return true
    }
    return false
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
