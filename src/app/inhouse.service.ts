import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { IUsers } from './users';
import { config, map, Observable, Subject } from 'rxjs';
import { Applicant } from './applicant';

interface loginform {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class InhouseService {
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
    return this.http.post(
      'https://7889-115-117-172-107.in.ngrok.io/search/1/10',
      data
    );
  }
  logincheck(data: any) {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    return this.http
      .post('https://7889-115-117-172-107.in.ngrok.io/app/login', data, config)
      .pipe(
        map((data: any) => {
          console.log(data);
          if (data) {
            return true;
          } else {
            return false;
          }
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
    return this.http
      .post(
        'https://7889-115-117-172-107.in.ngrok.io/app/usersave',
        payload,
        config
      )
      .pipe(
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
