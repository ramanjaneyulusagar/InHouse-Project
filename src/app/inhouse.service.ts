import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { IUsers } from './users';
import { catchError, config, map, Observable, Subject } from 'rxjs';
import { Applicant } from './applicant';
import { apis } from './apis';
interface loginform {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class InhouseService {
  // public API='http://localhost:8080/app';

  constructor(private http: HttpClient) {}

  logout() {
    localStorage.removeItem('user');
  }
  public get log(): boolean {
    return localStorage.getItem('user') !== null;
  }
  user(data: any) {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    return this.http.post(apis.SEARCH(), data).pipe(catchError(async (err:any)=>{
      alert(err);
    }))

    ;
  }
  logincheck(data: any) {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    return this.http.post(apis.LOGIN(), data, config).pipe(
      map((data: any) => {
        return  data
      })
    );
  }
  update(payload: any) {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    return this.http.post(apis.USERSAVE(), payload, config).pipe(
      map((data: any) => {
        console.log(data);
        if (data) {
          return true;
        } else {
          return false;
        }
      })
    );
    // return this.http.post(
    //   'https://7889-115-117-172-107.in.ngrok.io/app/usersave',
    //   payload
    // );
  }
}
