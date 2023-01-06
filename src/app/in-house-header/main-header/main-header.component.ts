import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  //  isOpen = true;

  // toggle() {
  //   this.isOpen = !this.isOpen;
  // }
  loader:boolean=false;
  isLoginPage!: boolean;
  loginButton = true;
  signInButton = true;
  divContent = true;
  isActive: boolean = false;
  @Input() page: string = '';
  constructor(public route: Router) {}

  ngOnInit() {
    // throw new Error('Method not implemented.')/////
    // this.loader=true;
    setTimeout(() => {
      this.loader=true
    },100);

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
  LogOut() {
    this.route.navigate(['']);
  }
}
