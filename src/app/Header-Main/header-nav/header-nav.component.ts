import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginformComponent } from 'src/app/loginform/loginform.component';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
})
export class HeaderNavComponent implements OnInit {
  @ViewChild(LoginformComponent) isLogCom: any;
  isLoginPage!: boolean;
  loginButton = true;
  signInButton = true;
  divContent = true;
  @Input() page: string = '';
  constructor(public route: Router) {}

  ngOnInit() {
    // throw new Error('Method not implemented.');
  }
  LoginTo() {
    this.loginButton = false;
    this.route.navigate(['loginform']);
  }
  SignInTo() {
    this.route.navigate(['register']);
  }
  DashboardPage() {
    this.route.navigate(['dashboard']);
  }
  LogOut(){
    this.route.navigate(['']);
  }
}
