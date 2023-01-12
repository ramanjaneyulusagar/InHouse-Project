import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InHouseService } from '../in-house.service';

@Component({
  selector: 'app-app-header1',
  templateUrl: './app-header1.component.html',
  styleUrls: ['./app-header1.component.css']
})
export class AppHeader1Component {
  loader: boolean = false;
  isLoginPage!: boolean;
  loginButton = true;
  signInButton = true;
  divContent = true;
  isActive: boolean = false;
  @Input() page: string = '';
  constructor(private route: Router, private _service: InHouseService){

  }
  toggleActive() {
    this.isActive = !this.isActive;
  }
  goto() {
    this.route.navigate(['/']);
  }
  LoginTo() {
    this.loginButton = false;
    this.route.navigate(['user-admin-type-login']);
  }
  SignInTo() {
    this.route.navigate(['registration-page']);
  }
  authToken() {
    return this._service.loggedIn();
  }
  LogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('is_admin');
    this.route.navigate(['']);
    return true;
  }
  get isAdmin() {
    let is_admin = localStorage.getItem('is_admin');
    if (is_admin === 'on') {
      return true;
    } else {
      return false;
    }
  }
}
