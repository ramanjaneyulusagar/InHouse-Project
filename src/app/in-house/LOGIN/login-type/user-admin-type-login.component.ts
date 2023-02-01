import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-admin-type-login',
  templateUrl: './user-admin-type-login.component.html',
  styleUrls: ['./user-admin-type-login.component.css']
})
export class UserAdminTypeLoginComponent {
  public isLoginCandidate: boolean = true;
  public isLoginType: boolean = true;
  public userLogin: string = '';
  constructor(private route: Router) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  loginAsUser() {
    let userLogin: string = 'User Login';
    this.route.navigate(['login-page/user']);
    console.log(userLogin);
  }
  loginAsAdmin() {
    let userLogin: string = 'Admin Login';
    this.route.navigate(['login-page/admin']);
    console.log(userLogin);
  }
}
