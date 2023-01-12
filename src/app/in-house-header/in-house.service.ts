import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InHouseService {
  // isLoggedIn: boolean = false;
  constructor() {
    // window.addEventListener('beforeunload', (event) => {
    //   localStorage.removeItem('token');

    // }
    // );
  }
  loggedIn() {
    let hasToken = false;
    if (localStorage.getItem('token') == 'passCode') {
      hasToken = true;
    }
    return hasToken;
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
