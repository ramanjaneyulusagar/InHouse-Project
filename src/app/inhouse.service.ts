import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUsers } from './users';
import { Observable, Subject } from 'rxjs';
import { Applicant } from './applicant';

interface loginform {
  email: string, password: string
}
@Injectable({
  providedIn: 'root'
})
export class InhouseService {
  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();
  constructor(private http: HttpClient) {
    this.http.get("http://localhost:3000/profile").subscribe(data =>
      console.log(data))
  }
  login(email: string, password: string) {
    if (email == 'a' && password == 'a') {
      localStorage.setItem('user', 'log');
      return true
    }
    return false
  }
  logout() {
    localStorage.removeItem('user');
  }
  public get log(): boolean {
    return (localStorage.getItem('user') !== null)
  }

  user(data: any) {
    let config = {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      }
    }
    return this.http.post("https://2ff1-115-117-172-107.in.ngrok.io/app/search/1/10", data);
  }
  logincheck(data: any) {
    return this.http.post("https://2ff1-115-117-172-107.in.ngrok.io/app/login", data)
  }
  update(payload: any) {
    return this.http.post("https://2ff1-115-117-172-107.in.ngrok.io/app/usersave", payload);
  }

}








  // user1() {
  //   return this.http.get<IUsers>("http://localhost:3000/profile")
  // }

  //  reset(payload:Applicant){
  //   this.http.put("http://localhost:3000/profile/${pay}",)
  //  }

  // update(payload: any) {
  //   return this.http.post("http://localhost:3000/profile", payload);
  // }
  // getdata() {
  //   return this.http.get("http://localhost:3000/profile")
  // }
