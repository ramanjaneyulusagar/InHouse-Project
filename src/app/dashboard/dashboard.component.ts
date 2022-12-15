import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InhouseService } from '../inhouse.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() page: string = '';

  constructor(public route: Router, private service: InhouseService) {}

  ngOnInit(): void {}
  refresh() {
    window.location.reload();
  }



  LoginOut() {
    this.service.logout();
    this.route.navigate(['loginform']);
  }
  SignInTo() {
    this.route.navigate(['register']);
  }
}
