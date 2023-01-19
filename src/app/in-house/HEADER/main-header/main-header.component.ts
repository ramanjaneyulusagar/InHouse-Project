import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { InHouseService } from '../../SERVICES/in-house.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
})
export class MainHeaderComponent {
  //  isOpen = true;

  // toggle() {
  //   this.isOpen = !this.isOpen;
  // }
  loader: boolean = false;
  isLoginPage!: boolean;
  loginButton = true;
  signInButton = true;
  divContent = true;
  isActive: boolean = false;
  @Input() page: string = '';
  constructor(private route: Router, private _service: InHouseService) {}

  ngOnInit() {
    // throw new Error('Method not implemented.')/////
    // this.loader=true;
    setTimeout(() => {
      this.loader = true;
    }, 100);
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
